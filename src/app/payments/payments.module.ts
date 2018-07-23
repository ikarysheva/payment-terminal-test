import { NgModule } from '@angular/core';
import { PaymentListComponent } from './payment-list/payment-list.component';
import { PaymentsComponent } from './payments.component';
import { PaymentsRoutingModule } from './payments-routing.module';
import { PaymentCreateComponent } from './payment-create/payment-create.component';
import { SharedModule } from '../shared/shared.module';
import { PaymentSuccessComponent } from './payment-success/payment-success.component';

@NgModule({
  imports: [
    SharedModule,
    PaymentsRoutingModule
  ],
  declarations: [
    PaymentListComponent,
    PaymentsComponent,
    PaymentCreateComponent,
    PaymentSuccessComponent
  ],
  entryComponents: [PaymentSuccessComponent]
})
export class PaymentsModule { }
