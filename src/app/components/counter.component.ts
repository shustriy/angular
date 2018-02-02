import { Component, Input } from '@angular/core';
import {Observable} from 'rxjs/Observable';

import { AppStore } from '../services/app.store';
import * as CounterActions from '../services/counter.actions';

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
    this.appStore.store.subscribe((store) => {

    });
    this.number = this.appStore.store;
  }

  public onIncrement() {
    console.log('onIncrement', this.appStore.store);
    this.appStore.store.dispatch({ type: CounterActions.INCREMENT });
  }

  public onDecrement() {
    console.log('onDecrement', this.appStore.store);
    this.appStore.store.dispatch({ type: CounterActions.DECREMENT });
  }
}
