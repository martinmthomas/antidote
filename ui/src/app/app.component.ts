import { Component, OnInit } from '@angular/core';
import { SignalRService } from './services/signal-r.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Antidote Generator';

  constructor(private signalrService: SignalRService) { }

  ngOnInit(): void {
    this.signalrService.StartConnection();
  }
}
