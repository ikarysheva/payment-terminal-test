import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable, from } from 'rxjs';
import { shareReplay } from 'rxjs/operators';
import { Operator } from './models/operator.model';

const CACHE_SIZE = 1;

@Injectable({
  providedIn: 'root'
})
export class DataStorageService {

  private cache$: Observable<Operator[]>;

  constructor(private httpClient: HttpClient) { }

  get operators() {
    if (!this.cache$) {
      this.cache$ = this.requestOperators().pipe(
        shareReplay(CACHE_SIZE)
      );
    }

    return this.cache$;
  }

  createPayment(operatorId, phone, amount) {
    return from(
      new Promise((resolve, reject) => {
        setTimeout(() => {
          const i = Math.random() * 2;
          if (i < 1) {
            resolve('success');
          } else {
            reject('somthing went wrong');
          }
        }, 1500);
      })
    );
  }

  private requestOperators() {
    return this.httpClient.get<any>('./assets/operators.json').pipe(
      map(data => data.operators)
    );
  }
}
