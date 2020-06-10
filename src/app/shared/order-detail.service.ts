import { OrderDetail, Order } from './order-detail.model';
import { Injectable } from '@angular/core';
import { HubConnection, HubConnectionBuilder } from '@aspnet/signalr';
import { HttpClient } from "@angular/common/http";
import { SignalRService } from '../services/signal-r.service';

@Injectable({
  providedIn: 'root'
})
export class OrderDetailService {
  orderList: OrderDetail[] = [];
  formData: OrderDetail;
  readonly rootURL = 'http://localhost:5000/api';

  constructor(private http: HttpClient, public signalRService: SignalRService) { }

  
  ngOnInit() {
    this.signalRService.startConnection();
    this.signalRService.addTransferOrderDataListener();
    this.startHttpRequest();
  }
  
  private startHttpRequest = () => {
  this.http.get('http://localhost:5000/api/orderdetail')
  .subscribe(res => {
    this.orderList = res as OrderDetail[];
  });
  }

  postOrderDetail() {
    return this.http.post(this.rootURL + '/orderdetail', this.formData);
  }
  putOrderDetail() {
    return this.http.put(this.rootURL + '/orderdetail/UpdateOrder/'+ this.formData.orderNumber, this.formData);
  }
  cancelOrder(orderNumber: number){
    return this.http.put(this.rootURL + '/orderdetail/CancelOrder/'+ orderNumber, this.formData);
  }  
  completeOrder(orderNumber: number){
    return this.http.put(this.rootURL + '/orderdetail/CompleteOrder/'+ orderNumber, this.formData);
  }


  refreshList(){
    this.http.get(this.rootURL + '/orderdetail')
    .toPromise()
    .then(res => 
      this.orderList = res as OrderDetail[]);
  }
}
