import { Injectable } from '@angular/core';
import { Observable, Subject, interval, combineLatest } from 'rxjs';
import { TaskStatusEnum } from '../common/models/task-status-enum';
import { HttpClient } from '@angular/common/http';
import { LogItem } from '../common/models/log-item';
import { tap, switchMap, filter } from 'rxjs/operators';
import { ChartData } from '../common/models/chart-data';
import { AnalysisItem } from '../common/analysis-item';

@Injectable({
    providedIn: 'root'
})
export class TaskService {

    private baseUrl = `http://localhost:5000/api/task`;
    private taskStatusUrl = `${this.baseUrl}/status`;
    private logsUrl = `${this.baseUrl}/logs`;
    private cleanStateUrl = `${this.baseUrl}/cleanState`;
    private virusUploadUrl = `${this.baseUrl}/virus`;
    private antidoteUrl = `${this.baseUrl}/antidote`;
    private chartDataUrl = `${this.baseUrl}/chartdata`;
    private analysisDataUrl = `${this.baseUrl}/analyses`;

    private statusSubject = new Subject<TaskStatusEnum>();
    private logsSubject = new Subject<LogItem[]>();
    private chartSubject = new Subject<ChartData>();

    private currentStatus: TaskStatusEnum;

    constructor(private http: HttpClient) {
        this.initSubjects();
    }

    initSubjects() {
        let apiCalls = combineLatest(
            this.http.get<TaskStatusEnum>(this.taskStatusUrl),
            this.http.get<LogItem[]>(this.logsUrl)
        );

        interval(1000)
            .pipe(
                switchMap(_ => apiCalls),
                tap(([status, logs]) => {
                    if (this.currentStatus !== status) {
                        this.currentStatus = status;
                        this.statusSubject.next(status);
                    }
                    this.logsSubject.next(logs);
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

    getLogs(): Observable<LogItem[]> {
        return this.logsSubject.asObservable();
    }

    getAnalysisData(loadLatest: boolean = false): Observable<AnalysisItem[]> {
        let queryParams = { 'loadLatest': loadLatest.toString() };
        return this.http.get<AnalysisItem[]>(this.analysisDataUrl, { params: queryParams });
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
