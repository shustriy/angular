import { Observable } from 'rxjs';
import { filter, map, distinctUntilChanged, tap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { combineEpics, createEpicMiddleware } from 'redux-observable';
import { composeWithDevTools } from 'redux-devtools-extension';
import * as Immutable from 'immutable';
import 'rxjs/ajax';
import 'rxjs/observable/of';
import 'rxjs/operator/catch';
import 'rxjs/operator/debounceTime';
import 'rxjs/operator/mergeMap';
import 'rxjs/operator/startWith';

import { counter } from './reducers/counter.reducer';
import { schulz } from './reducers/schulz.reducer';
import { incrementOddEpic } from './epics/counter.epic';
import * as SchulzActions from './schulz.actions';
import * as CounterActions from './counter.actions';

@Injectable()
export class AppStore {

    private appStore: any;

    private appStoreState$: Observable<any>;

    get store() {
        return this.appStore;
    }

    get state$() {
        return this.appStoreState$;
    }

    constructor() {
        const rootReducer = combineReducers({
            counter,
            schulz
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

        this.initStateStream();

        epicMiddleware.run(rootEpic);
    }

    private initStateStream() {
        const state$ = new Observable((observer) => {
            observer.next(this.appStore.getState());

            const unsubscribe = this.appStore.subscribe(() => observer.next(this.appStore.getState()));
            return unsubscribe;
        });
        this.appStoreState$ = state$;
    }

    public getNumberStream() {
        return this.appStoreState$.pipe(
            tap(state => console.log('tap', state)),
            map(state => state['counter'])
        );
    }

    public getSchulzStream() {
        return this.appStoreState$.pipe(
            distinctUntilChanged(),
            map(state => state['schulz'])
        );
    }

}