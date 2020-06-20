import { Component } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Subject } from 'rxjs';
import { tap, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent {

  selectedFile: File;

  constructor(private taskService: TaskService, private modalService: NgbModal) { }

  openModal(fileUpload) {
    let _self = this;
    this.modalService.open(fileUpload)
      .result.then(
        () => { _self.startAnalysis() },
        () => { }
      );
  }

  fileSelected(files: FileList) {
    if (!!files && files.length > 0) {
      this.selectedFile = files[0];
    }
  }

  startAnalysis() {
    this.taskService.startAnalysis(this.selectedFile.name)
      .subscribe();
  }
}
