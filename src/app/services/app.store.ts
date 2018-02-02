import { Injectable } from '@angular/core';
import { createStore } from 'redux';
import { combineReducers } from 'redux'
import * as Immutable from 'immutable';

import * as CounterActions from './counter.actions';

@Injectable()
export class AppStore {

  private appStore: any;

  constructor() {

    let counterReducer = (state: number = 0, action) => {
      console.log('counterReducer', action, state);
      switch (action.type) {
        case CounterActions.INCREMENT:
          return state++;
        case CounterActions.DECREMENT:
          return state--;
        default:
          return state
      }
    };

    this.appStore = createStore(counterReducer);
  }

  get store() {
    return this.appStore;
  }

}