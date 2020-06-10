import { Injectable } from '@angular/core';
import * as signalR from "@aspnet/signalr";
import { OrderDetail } from 'src/app/shared/order-detail.model';
import { OrderDetailService } from '../shared/order-detail.service';

@Injectable({
  providedIn: 'root'
})
export class SignalRService { 
public data: OrderDetail[];

  private hubConnection: signalR.HubConnection;

  public startConnection = () => {
    this.hubConnection = new signalR.HubConnectionBuilder()
    .withUrl('https://localhost:5001/orderhub')
    .build();

    this.hubConnection
    .start()
    .then(() => console.log('Connection Started'))
    .catch(err => console.log('Error while starting connection' + err))
  }
  
  public addTransferOrderDataListener = () =>  {
    this.hubConnection.on('transferorderdata', (data) => {
      this.data = data;
    });
   }
  }
