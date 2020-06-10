import { Injectable } from '@angular/core';
import { InMemoryDbService, RequestInfo, RequestInfoUtilities, ParsedRequestUrl, ResponseOptions, getStatusText, STATUS } from 'angular-in-memory-web-api';
import { TaskStatusEnum } from '../common/models/task-status-enum';
import { LogItem } from '../common/models/log-item';
import { of } from 'rxjs';
import { delay, tap } from 'rxjs/operators';
import { typeWithParameters } from '@angular/compiler/src/render3/util';
import { ChartData } from '../common/models/chart-data';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  status: any[];
  logs: LogItem[];
  chartdata: ChartData[];

  constructor() { }

  createDb(reqInfo?: RequestInfo) {

    this.status = [TaskStatusEnum.None];
    this.logs = [];
    this.chartdata = [
      { labels: ['New Files', 'Registry Edits', 'File Edits'], values: [200, 600, 200] }
    ]

    const db = {
      status: this.status,
      logs: this.logs,
      chartdata: this.chartdata
    };

    return of(db).pipe(delay(10));
  }

  /**
   * 'In memory data service' can only handle simple url formats. So, converting the long format to short one here
  */
  parseRequestUrl(url: string, utils: RequestInfoUtilities): ParsedRequestUrl {

    const newUrl = url.replace(/\/task\//, '/');
    const parsed = utils.parseRequestUrl(newUrl);
    return parsed;
  }

  get(reqInfo: RequestInfo) {

    if (reqInfo.collectionName.toLowerCase() === 'status') {
      return this.createResponse(reqInfo, this.status);
    }

    return undefined;
  }

  post(reqInfo: RequestInfo) {

    let postRequestHandled = false;

    if (reqInfo.collectionName.toLowerCase() === 'cleanstate') {
      this.restoreCleanState(reqInfo);
      postRequestHandled = true;
    }
    else if (reqInfo.collectionName.toLowerCase() === 'virus') {
      this.uploadVirus(reqInfo);
      postRequestHandled = true;
    }
    else if (reqInfo.collectionName.toLowerCase() === 'antidote') {
      this.createAntidote(reqInfo);
      postRequestHandled = true;
    }

    if (postRequestHandled) {
      return this.createResponse(reqInfo, {});
    }

    return undefined;
  }

  private restoreCleanState(reqInfo: RequestInfo) {

    this.addLogItem('Restoring system to Clean State started');
    this.status = [TaskStatusEnum.CleanStateStarted];

    this.updateStateAfterDelay({ status: TaskStatusEnum.CleanStateCompleted, log: 'Restoring system to Clean State  completed' })
  }

  private uploadVirus(reqInfo: RequestInfo) {

    this.addLogItem(`Uploading virus file, ${reqInfo.utils.getJsonBody(reqInfo.req).fileName}, started`);
    this.addLogItem(`Uploading virus file, ${reqInfo.utils.getJsonBody(reqInfo.req).fileName}, completed`);
    this.addLogItem(`Analysis started`);
    this.status = [TaskStatusEnum.AnalysisStarted];

    this.updateStateAfterDelay({ status: TaskStatusEnum.AnalysisStarted, log: `Registry entry Computer\HKEY_LOCAL_MACHINE\VisualStudio is corrupted` }, 1000);
    this.updateStateAfterDelay({ status: TaskStatusEnum.AnalysisStarted, log: 'Registry entry Computer\HKEY_LOCAL_MACHINE\Notepad is corrupted' }, 1000);
    this.updateStateAfterDelay({ status: TaskStatusEnum.AnalysisStarted, log: 'New file found at Systemfiles\\324Sdfs.dat' }, 2000);
    this.updateStateAfterDelay({ status: TaskStatusEnum.AnalysisStarted, log: 'New file found at Systemfiles\\232dfads.dat' }, 2000);
    this.updateStateAfterDelay({ status: TaskStatusEnum.AnalysisStarted, log: 'Registry entry Computer\HKEY_LOCAL_MACHINE\Notepad is corrupted' }, 1000);
    this.updateStateAfterDelay({ status: TaskStatusEnum.AnalysisCompleted, log: 'Analysis completed' }, 3000)
  }

  private createAntidote(reqInfo: RequestInfo) {
    this.addLogItem('Creating Antidote started');
    this.status = [TaskStatusEnum.AntidoteGenStarted];

    this.updateStateAfterDelay({ status: TaskStatusEnum.AntidoteGenCompleted, log: 'Creating Antidote completed' });
  }

  private updateStateAfterDelay(data: any, delayInMilliSecs: number = 2000) {
    of(undefined).pipe(
      delay(delayInMilliSecs),
      tap(_ => {
        this.addLogItem(data.log);
        this.status = [data.status];
      })
    )
      .subscribe();
  }

  private addLogItem(description: string) {

    let latestAnalysis = this.logs[this.logs.length - 1]
    let id = !!latestAnalysis ? latestAnalysis.id + 1 : 1;

    this.logs.push({ id: id, date: this.getCurrentDate(), description: description });
  }

  private getCurrentDate() {

    let currDate = new Date();
    let day = `${currDate.getDay().toString().padStart(2, '0')}`;
    let month = `${currDate.getMonth().toString().padStart(2, '0')}`;
    let year = `${currDate.getFullYear()}`;
    let hours = `${currDate.getHours().toString().padStart(2, '0')}`;
    let mins = `${currDate.getMinutes().toString().padStart(2, '0')}`;
    let secs = `${currDate.getSeconds().toString().padStart(2, '0')}`;
    let millisecs = `${currDate.getMilliseconds().toString().padStart(3, '0')}`;
    return `${day}/${month}/${year} ${hours}:${mins}:${secs}.${millisecs}`;
  }

  private createResponse(reqInfo: RequestInfo, data: {}) {

    return reqInfo.utils.createResponse$(() => {
      const options: ResponseOptions = {
        body: data,
        status: STATUS.OK
      };

      return this.finishOptions(options, reqInfo);
    });
  }

  private finishOptions(options: ResponseOptions, { headers, url }: RequestInfo) {
    options.statusText = getStatusText(options.status);
    options.headers = headers;
    options.url = url;
    return options;
  }
}
