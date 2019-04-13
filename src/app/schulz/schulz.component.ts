import { Component, Input } from '@angular/core';
import {Observable} from 'rxjs';

import { AppStore } from '../services/app.store';
import * as CounterActions from '../services/counter.actions';

@Component({
  selector: 'schulz',
  templateUrl: './schulz.component.html',
  styleUrls: ['./schulz.component.css']
})
export class SchulzComponent {
  public number: number;
  public schulz: number[];

  constructor(
    protected appStore: AppStore
  ) {
    console.log('constructor', this.appStore.store);
    this.number = 0;
    this.appStore.store.subscribe(() => {
      this.number = this.appStore.store.getState();
      console.log('subscribe', this.appStore.store.getState());
    });

    this.schulz = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25];
  }

  public onIncrement() {
    console.log('onIncrement', this.appStore.store.getState());
    this.appStore.store.dispatch({ type: CounterActions.INCREMENT });
  }

  public onIncrementOdd() {
    console.log('onIncrementOdd', this.appStore.store.getState());
    this.appStore.store.dispatch({ type: CounterActions.INCREMENT_ODD });
  }

  public onIncrementAsync() {
    console.log('onIncrementAsync', this.appStore.store.getState());
    setTimeout(() => this.appStore.store.dispatch({ type: CounterActions.INCREMENT }), 1000);
  }

  public onDecrement() {
    console.log('onDecrement', this.appStore.store.getState());
    let number: number = this.appStore.getNumber();
    if (number>0) {
      this.appStore.store.dispatch({ type: CounterActions.DECREMENT });
    }
  }
}
