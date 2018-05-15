import 'rxjs';
import { filter } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { createStore, applyMiddleware } from 'redux';
import { combineReducers } from 'redux';
import { combineEpics } from 'redux-observable';
import { createEpicMiddleware } from 'redux-observable';
import { composeWithDevTools } from 'redux-devtools-extension';
import * as Immutable from 'immutable';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/dom/ajax';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/filter';

import * as CounterActions from './counter.actions';

@Injectable()
export class AppStore {

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
        .filter(()=> {
          console.log('epic filter number', store.getState());
          return (store.getState() % 2) !== 0
        })
        .map(() => ({type: CounterActions.INCREMENT}));

    const rootEpic = combineEpics(
      incrementOddEpic
    );

    const epicMiddleware = createEpicMiddleware(rootEpic);

    this.appStore = createStore(
      counterReducer,
      composeWithDevTools(
        applyMiddleware(epicMiddleware)
      )
    );
  }

  private appStore: any;

  get store() {
    return this.appStore;
  }

  public getNumber() {
    return this.appStore.getState();
  }

}