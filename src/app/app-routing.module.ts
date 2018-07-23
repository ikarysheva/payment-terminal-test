import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './core/main/main.component';

const routes: Routes = [
  {
    path: '', component: MainComponent, children: [
      { path: 'payments', loadChildren: './payments/payments.module#PaymentsModule' },
      { path: '', redirectTo: '/payments', pathMatch: 'full' },
    ]
  },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
