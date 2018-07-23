import { Injectable } from '@angular/core';
import { DataStorageService } from '../shared/data-storage.service';
import { Observable } from 'rxjs';
import { Operator } from '../shared/models/operator.model';

@Injectable({
  providedIn: 'root'
})
export class PaymentsService {

  constructor(private dataStorage: DataStorageService) {
  }

  getOperators(): Observable<Operator[]> {
    return this.dataStorage.operators;
  }

  async getOperator(id): Promise<Operator> {
    const operators = await this.dataStorage.operators.toPromise();
    const operator = operators.filter(item => item.id === id)[0];
    return operator;
  }

  createPayment(operatorId, phone, amount) {
    return this.dataStorage.createPayment(operatorId, phone, amount);
  }
}
