import { OrderDetailService } from '../../shared/order-detail.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Order } from 'src/app/shared/order-detail.model';

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styles: []
})
export class OrderDetailComponent implements OnInit {

  constructor(public service: OrderDetailService) { }

  ngOnInit() {
    this.resetForm();
  }
  
  resetForm(form?: NgForm) {
    if (form != null)
      form.form.reset();
    this.service.formData = {
      orderNumber: 0,
      orderName: '',
      orderTime: new Date(),
      orderStatus: 'Pending',
      order: new Order()
    }
  }  

  onSubmit(form: NgForm) {
    debugger
    if (this.service.formData.orderNumber == 0)
      this.insertRecord(form);
    else
      this.updateRecord(form);
  }
  
  updateRecord(form: NgForm) {
    this.service.putOrderDetail().subscribe(
      res => {
        this.resetForm(form);
        this.service.refreshList();
      },
      err => {
        console.log(err);
      }
    )
  }
  
  insertRecord(form: NgForm) {
    this.service.postOrderDetail().subscribe(
      res => {
        this.resetForm(form);
        this.service.refreshList();
      },
      err => { console.log(err); }
    )
  }

  refresh(): void {
    window.location.reload();
  }
}