import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { OrderDetailsComponent } from './order-details/order-details.component';
import { OrderDetailComponent } from './order-details/order-detail/order-detail.component';
import { OrderDetailListComponent } from './order-details/order-detail-list/order-detail-list.component';

import { HttpClientModule } from '@angular/common/http';
import { OrderDetailService } from './shared/order-detail.service';

import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    OrderDetailsComponent,
    OrderDetailComponent,
    OrderDetailListComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    FormsModule
  ],
  providers: [OrderDetailService],
  bootstrap: [AppComponent]
})
export class AppModule { }
