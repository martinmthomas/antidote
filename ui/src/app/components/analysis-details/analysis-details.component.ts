import { Component, OnInit, OnDestroy } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';
import { LogItem } from 'src/app/common/models/log-item';
import { Observable, of, ObservableLike, Subject } from 'rxjs';
import { AnalysisItem } from 'src/app/common/analysis-item';
import { map, tap, filter, share } from 'rxjs/operators';
import { TaskStatusEnum } from 'src/app/common/models/task-status-enum';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-analysis-details',
  templateUrl: './analysis-details.component.html',
  styleUrls: ['./analysis-details.component.scss']
})
export class AnalysisDetailsComponent implements OnInit, OnDestroy {

  logs$: Observable<LogItem[]>;
  analysisItems$: Observable<AnalysisItem[]>;
  analysisItemsSubject: Subject<AnalysisItem[]> = new Subject<AnalysisItem[]>();
  analysisItems: AnalysisItem[];
  filteredAnalysisItems: AnalysisItem[];
  keys$: Observable<string[]>;
  selectedKey: string = 'logs';

  public pieChartLabels: Label[] = ['Empty'];
  public pieChartData: number[] = [100];

  constructor(private taskService: TaskService) {
  }

  ngOnInit(): void {
    this.logs$ = this.taskService.getLogs();

    this.initAnalysisData(true);

    this.taskService.getStatus()
      .pipe(
        filter(status => status === TaskStatusEnum.AnalysisCompleted),
        tap(_ => this.initAnalysisData(true))
      )
      .subscribe();
  }

  initAnalysisData(loadLatest: boolean) {
    let analysis$ = this.taskService.getAnalysisData(loadLatest);

    this.keys$ = analysis$.pipe(
      map(items => items.map(item => item.key)),
      map(items => [...new Set(items)].sort((a, b) => a.localeCompare(b))), // retrieve only unique values
    );

    let itemMaps: { [key: string]: number } = {};
    analysis$.pipe(
      tap(items => this.analysisItems = items),
      map(items => items.map(item => item.key + '-' + item.data[0])),
      map(keys => keys.sort((a, b) => a.localeCompare(b))),
      tap(keys => keys.forEach(key => itemMaps[key] = !!itemMaps[key] ? (itemMaps[key] + 1) : 1)),
      tap(_ => {
        this.pieChartLabels = [];
        this.pieChartData = [];
        for (let key in itemMaps) {
          this.pieChartLabels.push(key);
          this.pieChartData.push(itemMaps[key]);
        }
      }))
      .subscribe();
  }

  selectKey(key: string) {
    this.selectedKey = key;
    if (key !== 'logs' && key !== 'chart')
      this.filteredAnalysisItems = this.getFilteredAnalysisItems();
    else
      this.filteredAnalysisItems = [];
  }

  getFilteredAnalysisItems() {
    return this.analysisItems.filter(item => item.key === this.selectedKey);
  }

  ngOnDestroy(): void { }
}
