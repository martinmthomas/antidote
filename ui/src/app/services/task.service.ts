import { Injectable } from '@angular/core';
import { Observable, Subject, interval, combineLatest } from 'rxjs';
import { TaskStatusEnum } from '../common/models/task-status-enum';
import { HttpClient } from '@angular/common/http';
import { LogItem } from '../common/models/log-item';
import { tap, switchMap, filter } from 'rxjs/operators';
import { ChartData } from '../common/models/chart-data';

@Injectable({
    providedIn: 'root'
})
export class TaskService {

    private baseUrl = `http://localhost:5000/api/task`;
    private taskStatusUrl = `${this.baseUrl}/status`;
    private analysesUrl = `${this.baseUrl}/analyses`;
    private cleanStateUrl = `${this.baseUrl}/cleanState`;
    private virusUploadUrl = `${this.baseUrl}/virus`;
    private antidoteUrl = `${this.baseUrl}/antidote`
    private chartDataUrl = `${this.baseUrl}/chartdata`

    private statusSubject = new Subject<TaskStatusEnum>();
    private analysesSubject = new Subject<LogItem[]>();
    private chartSubject = new Subject<ChartData>();


    constructor(private http: HttpClient) {
        this.initSubjects();
    }

    initSubjects() {
        let apiCalls = combineLatest(
            this.http.get<TaskStatusEnum>(this.taskStatusUrl),
            this.http.get<LogItem[]>(this.analysesUrl));

        interval(1000)
            .pipe(
                switchMap(_ => apiCalls),
                tap(([status, analyses]) => {
                    this.statusSubject.next(status);
                    this.analysesSubject.next(analyses);
                }),
                filter(([status]) => status === TaskStatusEnum.AnalysisCompleted || status === TaskStatusEnum.AntidoteGenCompleted || status === TaskStatusEnum.CleanStateStarted),
                switchMap(_ => this.http.get<ChartData>(this.chartDataUrl)),
                tap(data => this.chartSubject.next(data))
            )
            .subscribe();
    }

    getStatus(): Observable<TaskStatusEnum> {
        return this.statusSubject.asObservable();
    }

    getAnalyses(): Observable<LogItem[]> {
        return this.analysesSubject.asObservable();
    }

    getChartData(): Observable<ChartData> {
        return this.chartSubject.asObservable();
    }

    restoreCleanState(): Observable<object> {
        return this.http.post(this.cleanStateUrl, {});
    }

    uploadVirus(fileName: string): Observable<object> {
        return this.http.post(`${this.virusUploadUrl}?fileName=${fileName}`, {});
    }

    createAntidote(): Observable<object> {
        return this.http.post(this.antidoteUrl, {});
    }
}
