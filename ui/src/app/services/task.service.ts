import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Analysis } from '../common/models/analysis';
import { tap } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class TaskService {

    private baseUrl = `http://localhost:5000/api/task`;
    private analysesUrl = `${this.baseUrl}/analyses`;
    private machinesUrl = `${this.baseUrl}/machines`;
    private scanUrl = `${this.baseUrl}/scan`;

    private analyisStatusSubject: Subject<boolean> = new Subject<boolean>();

    constructor(private http: HttpClient) { }

    startAnalysis(fileName: string): Observable<any> {
        this.analyisStatusSubject.next(true);
        return this.http.post(this.analysesUrl, {}, { params: { fileName: fileName } })
            .pipe(
                tap(_ => this.analyisStatusSubject.next(false))
            );
    }

    isAnalysisInProgress(): Observable<boolean> {
        return this.analyisStatusSubject.asObservable();
    }

    getAnalysisData(): Observable<Analysis> {
        return this.http.get<Analysis>(`${this.analysesUrl}/latest`);
    }

    getMachines(): Observable<string[]> {
        return this.http.get<string[]>(this.machinesUrl);
    }

    scan(analysisName: string, ipAddress: string) {
        return this.http.post(this.scanUrl, {}, {
            params: {
                analysisName: analysisName,
                ipAddress: ipAddress
            }
        });
    }
}
