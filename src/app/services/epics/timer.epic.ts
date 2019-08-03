import { switchMap } from 'rxjs/operators';
import { ofType } from 'redux-observable';
import { of } from 'rxjs';

import * as TimerActions from '../timer.actions';

const result$ = of(
    { type: TimerActions.STOP },
    { type: TimerActions.RESET },
    { type: TimerActions.START }
);
export const timerEpic = (action$, store) =>
    action$.pipe(
        ofType(TimerActions.RESTART),
        switchMap(() => result$)
    );
