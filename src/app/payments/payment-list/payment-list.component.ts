import { Component, OnInit } from '@angular/core';
import { PaymentsService } from '../payments.service';
import { Observable } from 'rxjs';
import { Operator } from '../../shared/models/operator.model';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-payment-list',
  templateUrl: './payment-list.component.html',
  styleUrls: ['./payment-list.component.scss']
})
export class PaymentListComponent implements OnInit {

  operators$: Observable<Operator[]>;

  constructor(
    private paymentService: PaymentsService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.operators$ = this.paymentService.getOperators();
  }

  onOperatorSelect(item: Operator) {
    this.router.navigate([item.id], { relativeTo: this.route });
  }
}
