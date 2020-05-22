import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType } from 'chart.js';
import { Label } from 'ng2-charts';
import * as pluginDataLabels from 'chartjs-plugin-datalabels';
import { TaskService } from 'src/app/services/task.service';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-analyses-chart',
  templateUrl: './analyses-chart.component.html',
  styleUrls: ['./analyses-chart.component.scss']
})
export class AnalysesChartComponent implements OnInit {

  public pieChartOptions: ChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    legend: {
      position: 'top',
    },
    plugins: {
      datalabels: {
        formatter: (value, ctx) => {
          const label = ctx.chart.data.datasets[0].data[ctx.dataIndex];
          return label;
        },
      },
    }
  };
  public pieChartLabels: Label[] = ['Empty'];
  public pieChartData: number[] = [100];
  public pieChartType: ChartType = 'pie';
  public pieChartLegend = true;
  public pieChartPlugins = [pluginDataLabels];
  public pieChartColors = [
    {
      backgroundColor: ['rgba(255,0,0,0.3)', 'rgba(0,255,0,0.3)', 'rgba(0,0,255,0.3)'],
    },
  ];

  constructor(private taskService: TaskService) { }

  ngOnInit() {
    this.taskService.getChartData()
      .pipe(
        tap(data => {
          this.pieChartLabels = data.labels;
          this.pieChartData = data.values;
        })
      )
      .subscribe();
  }

  // addSlice() {
  //   this.pieChartLabels.push(['Line 1', 'Line 2', 'Line 3']);
  //   this.pieChartData.push(400);
  //   this.pieChartColors[0].backgroundColor.push('rgba(196,79,244,0.3)');
  // }
}
