import 'rxjs';
import { filter } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { createStore, applyMiddleware } from 'redux';
import { combineReducers } from 'redux';
import {combineEpics, ofType} from 'redux-observable';
import { createEpicMiddleware } from 'redux-observable';
import { composeWithDevTools } from 'redux-devtools-extension';
import * as Immutable from 'immutable';
import { Observable } from 'rxjs';
import 'rxjs/ajax';
import 'rxjs/observable/of';
import 'rxjs/operator/catch';
import 'rxjs/operator/debounceTime';
import { map } from 'rxjs/operators/map';
import 'rxjs/operator/mergeMap';
import 'rxjs/operator/startWith';


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
      action$.pipe(
        ofType(CounterActions.INCREMENT_ODD),
        filter(()=> {
          console.log('epic filter number', store.getState());
          return (store.getState() % 2) !== 0
        }),
        map(() => ({type: CounterActions.INCREMENT}))
      );

    const rootEpic = combineEpics(
      incrementOddEpic
    );

    const epicMiddleware = createEpicMiddleware();

    this.appStore = createStore(
      counterReducer,
      composeWithDevTools(
        applyMiddleware(epicMiddleware)
      )
    );

    epicMiddleware.run(rootEpic);
  }

  private appStore: any;

  get store() {
    return this.appStore;
  }

  public getNumber() {
    return this.appStore.getState();
  }

}