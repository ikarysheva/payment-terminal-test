import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-payment-success',
  template: `
  <div fxLayout="column" fxLayoutAlign="center center" fxLayoutGap="20px">

    <h2 class="mat-body-1">Success!</h2>

    <button mat-raised-button color="accent" (click)="onClose()">OK</button>
  </div>
  `,
  styles: []
})
export class PaymentSuccessComponent {

  constructor(public dialogRef: MatDialogRef<PaymentSuccessComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  onClose(): void {
    this.dialogRef.close();
  }

}
