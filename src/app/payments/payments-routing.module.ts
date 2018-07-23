import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaymentsComponent } from './payments.component';
import { PaymentListComponent } from './payment-list/payment-list.component';
import { PaymentCreateComponent } from './payment-create/payment-create.component';

const routes: Routes = [
  {
    path: '', component: PaymentsComponent, data: { title: 'Payments' }, children: [
      { path: '', component: PaymentListComponent, data: { title: 'List of operators' } },
      { path: ':id', component: PaymentCreateComponent, data: { title: 'Refilling' } },
    ]
  },

];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class PaymentsRoutingModule { }
