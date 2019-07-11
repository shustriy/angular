import { Component, Input } from '@angular/core';
import {Observable} from 'rxjs';
import { take } from 'rxjs/operators';

import { AppStore } from '../services/app.store';
import * as CounterActions from '../services/counter.actions';
import * as SchulzActions from '../services/schulz.actions';

@Component({
  selector: 'counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent {
  public number: number;

  constructor(
    protected appStore: AppStore
  ) {
    console.log('constructor', this.appStore.store);
    this.number = 0;
    this.appStore.getNumberStream().subscribe((number) => {
      this.number = number;
      console.log('subscribe number', number);
    });
  }

  public onIncrement() {

    this.appStore.store.dispatch({ type: CounterActions.INCREMENT });
  }

  public onIncrementOdd() {

    this.appStore.store.dispatch({ type: CounterActions.INCREMENT_ODD });
  }

  public onIncrementAsync() {
    console.log('onIncrementAsync', this.appStore.store.getState());
    setTimeout(() => this.appStore.store.dispatch({ type: CounterActions.INCREMENT }), 1000);
  }

  public onDecrement() {
    console.log('onDecrement', this.appStore.store.getState());
    this.appStore.getNumberStream().pipe(
      take(1)
    ).subscribe(number => {
      if (number>0) {
        this.appStore.store.dispatch({ type: CounterActions.DECREMENT });
      }
    });
  }

  public onGenerateSchulz() {
    console.log('onGenerateSchulz', this.appStore.store.getState());
    this.appStore.store.dispatch({ type: SchulzActions.GENERATE });
  }
}
