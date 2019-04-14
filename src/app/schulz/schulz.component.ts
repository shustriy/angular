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

    let schulz = [
      1, 2, 3, 4, 5, 6, 7, 8, 9,
      10,11,12,13,14,15,16,17,18,
      19,20,21,22,23,24,25
    ];
    let countRandom = this.getRandomInt(26, 36);
    console.log('countRandom', countRandom);
    for (let i = 0; i<countRandom; i++) {
      let firstIndex = this.getRandomInt(1, 26) - 1;
      let secondIndex = this.getRandomInt(1, 26) - 1;

      //console.log('firstIndex', firstIndex);
      //console.log('secondIndex', secondIndex);
      //if (value>25 || value==25 || value<1 ||value==1) {
      //  console.log('value', value);
      //}
      let newSchulz = [...schulz];
      newSchulz[firstIndex] = schulz[secondIndex];
      newSchulz[secondIndex] = schulz[firstIndex];
      schulz = newSchulz;
    }
    console.log('schulz', schulz);
    console.log('matrix', this.convertFlat(schulz));
    this.schulz = schulz;
  }

  public convertFlat(flat: number[]) {
    let matrix: number[][];
    let index: number = 0;
    for (let i=0; i < 5; i++) {
      let cols = [];
      for (let j=0; j < 5; j++) {
        cols.push(flat[index++]);
      }
      matrix.push([...cols]);
    }
    return matrix;
  }

  private getRandomInt(min = 1, max = 26) {
    return Math.floor(Math.random() * (max - min)) + min;
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
