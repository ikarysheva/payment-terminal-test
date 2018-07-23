import { Component, OnInit } from '@angular/core';
import { PaymentsService } from '../payments.service';
import { Router, ActivatedRoute } from '@angular/router';
import { switchMap, pluck } from 'rxjs/operators';
import { Operator } from '../../shared/models/operator.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material';
import { PaymentSuccessComponent } from '../payment-success/payment-success.component';
import createNumberMask from 'text-mask-addons/dist/createNumberMask';

@Component({
  selector: 'app-payment-create',
  templateUrl: './payment-create.component.html',
  styleUrls: ['./payment-create.component.scss']
})
export class PaymentCreateComponent implements OnInit {

  operator: Operator;

  paymentForm: FormGroup;

  submitted = false;
  error: string;

  phoneMask = ['+', '7', ' ', '(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, '-', /\d/, /\d/];
  phonePattern = /((8|\+7)-?)?\s?\(?\d{3}\)?\s?-?\d{1}-?\d{1}-?\d{1}-?\d{1}-?\d{1}-?\d{1}-?\d{1}/;

  currencyMask;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private paymentService: PaymentsService,
    private fb: FormBuilder,
    private dialog: MatDialog) {
      this.currencyMask = createNumberMask({
        prefix: '',
        suffix: ' ₽',
        thousandsSeparatorSymbol: ''
      });
  }

  ngOnInit() {
    this.route.params
    .pipe(
      pluck('id'),
      switchMap(id => this.paymentService.getOperator(+id))
    )
    .subscribe(operator => {
      this.operator = operator;
    });
    this.createForm();
  }

  createForm() {
    this.paymentForm = this.fb.group({
      'phone': ['', [Validators.required, Validators.pattern(this.phonePattern)]],
      'amount': ['1', [Validators.required, Validators.max(1000), Validators.min(1)]]
    });
  }

  onCreatePayment() {
    this.submitted = true;
    return this.paymentService.createPayment(this.operator.id, this.phone.value, this.amount.value)
      .subscribe(
        (data) => {
          this.error = null;
          this.submitted = false;
          this.openSuccessDialog();
        },
        err => {
          this.error = err;
          this.submitted = false;
        }
      );
  }

  openSuccessDialog(): void {
    const dialogRef = this.dialog.open(PaymentSuccessComponent, {
      width: '350px'
    });

    dialogRef.afterClosed().subscribe(result => {
      this.onCancel();
    });
  }

  onCancel() {
    this.router.navigate(['../'], { relativeTo: this.route });
  }

  get phone() {
    return this.paymentForm ? this.paymentForm.get('phone') : null;
  }

  get amount() {
    return this.paymentForm ? this.paymentForm.get('amount') : null;
  }
}
