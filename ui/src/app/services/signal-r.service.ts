import { Injectable } from '@angular/core';
import * as signalR from "@aspnet/signalr";

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

  public GetNewLogItems(handleNewLogItems: (context: any, logs: string) => void, context: any) {
    this.hubConnetion.on('NewLogItemCreated', (arg) => handleNewLogItems(context, arg));
  }

  public StopConnection() {
    this.hubConnetion.stop();
  }
}
