import { Component, OnInit, Input } from '@angular/core';
import { ChartOptions, ChartType } from 'chart.js';
import { Label } from 'ng2-charts';
import * as pluginDataLabels from 'chartjs-plugin-datalabels';
import { Observable } from 'rxjs';
import { AnalysisItem } from 'src/app/common/analysis-item';

@Component({
  selector: 'app-analyses-chart',
  templateUrl: './analyses-chart.component.html',
  styleUrls: ['./analyses-chart.component.scss']
})
export class AnalysesChartComponent implements OnInit {

  @Input() analysisItems$: Observable<AnalysisItem[]>;

  public pieChartOptions: ChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    legend: {
      position: 'top', labels: { fontColor: '#111' }
    },
    plugins: {
      datalabels: {
        formatter: (value, ctx) => {
          const label = ctx.chart.data.datasets[0].data[ctx.dataIndex];
          return label;
        },
        color: '#111'
      }
    }
  };
  @Input() public pieChartLabels: Label[] = ['Empty'];
  @Input() public pieChartData: number[] = [100];
  public pieChartType: ChartType = 'pie';
  public pieChartLegend = true;
  public pieChartPlugins = [pluginDataLabels];
  public pieChartColors = [
    {
      backgroundColor: ['#415a73', '#65e237', '#4f508f', '#387870', '#a09209', '#de64e9', '#9e8e71', '#cfe319', '#a119ca', '#12856c'],
    },
  ];

  constructor() { }

  ngOnInit() {
  }
}
