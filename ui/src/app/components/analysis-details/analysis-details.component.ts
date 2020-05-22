import { Component, OnInit, OnDestroy } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';
import { LogItem } from 'src/app/common/models/log-item';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-analysis-details',
  templateUrl: './analysis-details.component.html',
  styleUrls: ['./analysis-details.component.scss']
})
export class AnalysisDetailsComponent implements OnInit, OnDestroy {

  analyses$: Observable<LogItem[]>;

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    this.analyses$ = this.taskService.getAnalyses();
  }

  ngOnDestroy(): void {
  }
}
