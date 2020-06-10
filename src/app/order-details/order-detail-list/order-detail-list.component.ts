import { OrderDetailService } from './../../shared/order-detail.service';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { SignalRService } from 'src/app/services/signal-r.service';
import { OrderDetail } from 'src/app/shared/order-detail.model';

@Component({
  selector: 'app-order-detail-list',
  templateUrl: './order-detail-list.component.html',
  styles: [
  ]
})
export class OrderDetailListComponent implements OnInit {
 orderList: OrderDetail[]= [];
  constructor(public service: OrderDetailService, public signalRService: SignalRService, private http: HttpClient) { }

  ngOnInit() {
    this.service.refreshList();
  }

  populateForm(selectedRecord) {
    debugger
    this.service.formData = Object.assign({}, selectedRecord);
  }

  onCancel(orderNumber: number) {
    if (confirm('Are you sure to cancel this order?')) {
      this.service.cancelOrder(orderNumber)
        .subscribe(res => {
          this.service.refreshList();
        },
        err => { console.log(err); })
    }
  }  
  
  onConfirm(orderNumber: number) {
    if (confirm('Are you sure to confirm this order?')) {
      this.service.completeOrder(orderNumber)
        .subscribe(res => {
          this.service.refreshList();
        },
        err => { console.log(err); })
    }
  }
  
}
