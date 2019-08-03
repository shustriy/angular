import { Observable } from 'rxjs';
import { filter, map, distinctUntilChanged } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { combineEpics, createEpicMiddleware } from 'redux-observable';
import { composeWithDevTools } from 'redux-devtools-extension';
import * as Immutable from 'immutable';

import { timer } from './reducers/timer.reducer';
import { schulz } from './reducers/schulz.reducer';
import { timerEpic } from './epics/timer.epic';
import { schulzEpic } from './epics/schulz.epic';
import * as SchulzActions from './schulz.actions';
import * as TimerActions from './timer.actions';

@Injectable()
export class AppStore {

    private appStore: any;

    private appStoreState$: Observable<any>;

    get store() {
        return this.appStore;
    }

    constructor() {
        const rootReducer = combineReducers({
            timer,
            schulz
        });

        const rootEpic = combineEpics(
            timerEpic,
            schulzEpic
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

    public getTimerStream() {
        return this.appStoreState$.pipe(
            distinctUntilChanged(),
            map(state => state['timer'])
        );
    }

    public getSchulzStream() {
        return this.appStoreState$.pipe(
            distinctUntilChanged(),
            map(state => state['schulz']),
            filter(data => +data.length === 5)
        );
    }

}