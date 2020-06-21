import { Component, OnInit, Input } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';
import { tap } from 'rxjs/operators';
import { CheckboxValue } from 'src/app/common/models/checkbox-value';
import { SignalRService } from 'src/app/services/signal-r.service';
import { SignalRArgument } from 'src/app/common/models/signal-r-argument';

class ScanProgress {
  ipAddress: string;
  inProgress: boolean;
  logs: string[];
}

@Component({
  selector: 'app-analysis-scan',
  templateUrl: './analysis-scan.component.html',
  styleUrls: ['./analysis-scan.component.scss']
})
export class AnalysisScanComponent implements OnInit {

  @Input() public analysisName: string;

  public machines: CheckboxValue<string>[] = [];

  public machineScanProgress: ScanProgress[] = [];
  public selectedMachine: ScanProgress;

  constructor(private taskService: TaskService, private signalrService: SignalRService) { }

  ngOnInit(): void {
    this.taskService.getMachines()
      .pipe(
        tap(machines => this.initMachines(machines))
      )
      .subscribe();

    this.signalrService.GetNewLogItems('ScanSystem', this.handleNewLogItems, this);
  }

  public handleNewLogItems(context: AnalysisScanComponent, argument: SignalRArgument<string>) {
    let log = argument.data;

    if (!!log) {
      context.addScanLog(argument.id, log);

      setTimeout(() => {
        var viewerContent = document.getElementById('viewerContent');
        viewerContent.scrollTop = viewerContent.scrollHeight;
      }, 1);
    }
  }

  private initMachines(machines: string[]) {

    machines.forEach(machine => {
      this.machines.push({
        value: machine,
        isChecked: false
      });

      this.machineScanProgress.push({
        ipAddress: machine,
        inProgress: false,
        logs: []
      });
    });
  }

  public scan() {
    let selectedMachines = this.machines.filter(m => m.isChecked)
    if (!!selectedMachines && selectedMachines.length > 0) {
      selectedMachines.forEach(m => this.scanMachine(m.value));
      this.showLogs(selectedMachines[0].value);
    }
  }

  private scanMachine(ipAddress: string) {
    this.setScanProgress(ipAddress, true);
    this.taskService.scan(this.analysisName, ipAddress)
      .pipe(
        tap(_ => this.setScanProgress(ipAddress, false))
      )
      .subscribe();
  }

  private setScanProgress(ipAddress: string, inProgress: boolean) {
    let index = this.machineScanProgress.findIndex(s => s.ipAddress == ipAddress);
    this.machineScanProgress[index].inProgress = inProgress;
  }

  private addScanLog(ipAddress, log: string) {
    let index = this.machineScanProgress.findIndex(s => s.ipAddress == ipAddress);
    this.machineScanProgress[index].logs.push(log);
  }

  public showLogs(ipAddress: string) {
    let index = this.machineScanProgress.findIndex(s => s.ipAddress == ipAddress);
    this.selectedMachine = this.machineScanProgress[index];
  }
}
