import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrdersRoutingModule } from './orders-routing.module';
import { OrdersComponent } from './orders.component';
import { ModalModule } from '../modal/modal.module';

@NgModule({
  declarations: [OrdersComponent],
  imports: [CommonModule, OrdersRoutingModule, ModalModule],
})
export class OrdersModule {}
