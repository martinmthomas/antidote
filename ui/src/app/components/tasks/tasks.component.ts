import { Component, OnInit } from '@angular/core';
import { TaskStatusEnum } from 'src/app/common/models/task-status-enum';
import { TaskService } from 'src/app/services/task.service';
import { tap } from 'rxjs/operators';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {

  taskStatus: TaskStatusEnum;

  public get enableCleanStateBtn(): boolean {
    return this.taskStatus == TaskStatusEnum.None || this.taskStatus == TaskStatusEnum.AntidoteGenCompleted;
  }

  public get enableStartAnalysisBtn(): boolean {
    return this.taskStatus == TaskStatusEnum.CleanStateCompleted;
  }

  public get enableAntidoteGenBtn(): boolean {
    return this.taskStatus == TaskStatusEnum.AnalysisCompleted;
  }

  selectedFile: File;

  constructor(private taskService: TaskService, private modalService: NgbModal) { }

  ngOnInit(): void {
    this.taskService.getStatus()
      .pipe(
        tap(status => this.taskStatus = status)
      )
      .subscribe();
  }

  restoreCleanState() {
    this.taskService.restoreCleanState().subscribe();
  }

  openModal(fileUpload) {
    let _self = this;
    this.modalService.open(fileUpload)
      .result.then(
        result => { _self.uploadFile() },
        reject => { }
      );
  }

  fileSelected(files: FileList) {
    if (!!files && files.length > 0) {
      this.selectedFile = files[0];
    }
  }

  uploadFile() {
    this.taskService.uploadVirus(this.selectedFile.name)
      .subscribe();
  }

  createAntidote() {
    this.taskService.createAntidote().subscribe();
  }
}
