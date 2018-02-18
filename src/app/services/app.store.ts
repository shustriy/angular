import 'rxjs';
import { filter } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { createStore, applyMiddleware } from 'redux';
import { combineReducers } from 'redux';
import { combineEpics } from 'redux-observable';
import { createEpicMiddleware } from 'redux-observable';
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
          console.log('INC');
          return ++state;
        case CounterActions.DECREMENT:
          console.log('DEC');
          return --state;
        default:
          console.log('DEFAULT');
          return state;
      }
    };

    const incrementOddEpic = (action$, store) =>
      action$.ofType(CounterActions.INCREMENT_ODD)
          .filter((store.getState().number % 2) !== 0)
          .map(() => ({type: CounterActions.INCREMENT}));

    const rootEpic = combineEpics(
        incrementOddEpic
    );

    const epicMiddleware = createEpicMiddleware(rootEpic);

    this.appStore = createStore(
        counterReducer,
        applyMiddleware(epicMiddleware)
    );
  }

  get store() {
    return this.appStore;
  }

  public getNumber() {
    return this.appStore.getState();
  }

}