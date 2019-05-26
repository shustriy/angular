import { filter, map } from 'rxjs/operators';
import { ofType } from 'redux-observable';

import * as CounterActions from '../counter.actions';

export const incrementOddEpic = (action$, store) =>
    action$.pipe(
        ofType(CounterActions.INCREMENT_ODD),
        filter(()=> {
            const state = store.getState();
            console.log('epic filter number', state);
            return (state['counterReducer'] % 2) !== 0
        }),
        map(() => ({type: CounterActions.INCREMENT}))
    );
