import 'rxjs';
import { filter, map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { combineEpics, createEpicMiddleware } from 'redux-observable';
import { composeWithDevTools } from 'redux-devtools-extension';
import * as Immutable from 'immutable';
import { Observable } from 'rxjs';
import 'rxjs/ajax';
import 'rxjs/observable/of';
import 'rxjs/operator/catch';
import 'rxjs/operator/debounceTime';
import 'rxjs/operator/mergeMap';
import 'rxjs/operator/startWith';

import { counterReducer } from './reducers/counter.reducer';
import { schulzReducer } from './reducers/schulz.reducer';
import { incrementOddEpic } from './epics/counter.epic';
import * as SchulzActions from './schulz.actions';
import * as CounterActions from './counter.actions';

@Injectable()
export class AppStore {

    constructor() {

        const rootReducer = combineReducers({
            counterReducer,
            schulzReducer
        });

        const rootEpic = combineEpics(
            incrementOddEpic
        );

        const epicMiddleware = createEpicMiddleware();

        this.appStore = createStore(
            rootReducer,
            composeWithDevTools(
                applyMiddleware(epicMiddleware)
            )
        );

        epicMiddleware.run(rootEpic);
    }

    private appStore:any;

    get store() {
        return this.appStore;
    }

    public getNumber() {
        const state = this.appStore.getState();
        return state['counterReducer'];
    }

    public getSchulz() {
        const state = this.appStore.getState();
        return state['schulzReducer'];
    }

}