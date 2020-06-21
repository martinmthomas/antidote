import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';
import { Observable } from 'rxjs';
import { ReportItem } from 'src/app/common/report-item';
import { tap, filter, switchMap } from 'rxjs/operators';
import { Label } from 'ng2-charts';
import { SignalRService } from 'src/app/services/signal-r.service';
import { Analysis } from 'src/app/common/models/analysis';
import { SignalRArgument } from 'src/app/common/models/signal-r-argument';

@Component({
  selector: 'app-analysis-details',
  templateUrl: './analysis-details.component.html',
  styleUrls: ['./analysis-details.component.scss']
})
export class AnalysisDetailsComponent implements OnInit {

  public name: string = '';
  public logs: string[] = [];
  public report: ReportItem[];
  public filteredAnalysisItems: ReportItem[];

  public buttonNames: string[];
  public selectedBtn: string = 'logs';

  public analysisInProgress: boolean = false;

  public pieChartLabels: Label[] = ['Empty'];
  public pieChartData: number[] = [100];

  public selectedTab: string = 'analysis';

  constructor(private taskService: TaskService, private signalrService: SignalRService) { }

  ngOnInit(): void {
    this.taskTriggered(false);

    this.taskService.isAnalysisInProgress()
      .pipe(
        tap(progress => this.taskTriggered(progress)))
      .subscribe();

    this.signalrService.GetNewLogItems('CreateAnalysis', this.handleNewLogItems, this);
  }

  private taskTriggered(inProgress: boolean) {
    this.analysisInProgress = inProgress;

    if (inProgress)
      this.reset();
    else {
      this.taskService.getAnalysisData()
        .pipe(
          tap(analysis => this.initAnalysisData(analysis))
        )
        .subscribe();
    }
  }

  private reset() {
    this.name = '';
    this.logs = [];
    this.report = [];
    this.filteredAnalysisItems = [];
    this.buttonNames = [];
    this.selectedBtn = 'logs';
  }

  public handleNewLogItems(context: AnalysisDetailsComponent, argument: SignalRArgument<string>) {
    let log = argument.data;
    
    if (!!log) {
      context.logs.push(log);
      setTimeout(() => {
        var viewerContent = document.getElementById('viewerContent');
        viewerContent.scrollTop = viewerContent.scrollHeight;
      }, 1);
    }
  }

  private initAnalysisData(analysis: Analysis) {
    this.name = analysis.name;
    this.logs = analysis.logs;
    this.report = analysis.report;

    var reportKeys = this.report
      .map(item => item.key)
      .sort((key1, key2) => key1.localeCompare(key2));

    this.buttonNames = [...new Set(reportKeys)]; //gets unique items from the array

    this.initPieChart();
  }

  private getChartData() {
    let chartData: { [key: string]: number } = {};

    this.report
      .map(item => item.key + '-' + item.data[0])
      .sort((key1, key2) => key1.localeCompare(key2))
      .forEach(key => chartData[key] = !!chartData[key] ? (chartData[key] + 1) : 1);

    return chartData;
  }

  private initPieChart() {
    var chartData = this.getChartData();

    this.pieChartLabels = [];
    this.pieChartData = [];

    for (let key in chartData) {
      this.pieChartLabels.push(key);
      this.pieChartData.push(chartData[key]);
    }
  }

  public selectButton(btnName: string) {
    this.selectedBtn = btnName;
    if (btnName !== 'logs' && btnName !== 'chart')
      this.filteredAnalysisItems = this.getFilteredAnalysisItems();
    else
      this.filteredAnalysisItems = [];
  }

  private getFilteredAnalysisItems() {
    return this.report.filter(item => item.key === this.selectedBtn);
  }
}
