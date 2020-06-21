import { Injectable } from '@angular/core';
import * as signalR from "@aspnet/signalr";
import { SignalRArgument } from '../common/models/signal-r-argument';

@Injectable({
  providedIn: 'root'
})
export class SignalRService {

  private baseUrl = `http://localhost:5000`;
  private hubConnetion: signalR.HubConnection

  public StartConnection() {
    this.hubConnetion = new signalR.HubConnectionBuilder()
      .withUrl(`${this.baseUrl}/signalr`)
      .build();

    this.hubConnetion.start()
      .then(_ => console.log('Signalr connection established'))
      .catch(err => console.log(`Error in signalr connection: ${err}`));
  }

  public GetNewLogItems(category: string, handleNewLogItems: (context: any, argument: SignalRArgument<string>) => void, context: any) {
    this.hubConnetion.on('NewLogItemCreated', (arg: SignalRArgument<string>) => {
      if (arg.category === category)
        handleNewLogItems(context, arg);
    });
  }

  public StopConnection() {
    this.hubConnetion.stop();
  }
}
