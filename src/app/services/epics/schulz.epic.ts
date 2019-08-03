import { switchMap } from 'rxjs/operators';
import { ofType } from 'redux-observable';
import { of } from 'rxjs';

import * as TimerActions from '../timer.actions';
import * as SchulzActions from '../schulz.actions';

const result$ = of(
    { type: SchulzActions.GENERATE },
    { type: TimerActions.RESTART }
);

export const schulzEpic = (action$, store) =>
    action$.pipe(
        ofType(SchulzActions.REFRESH),
        switchMap(() => result$)
    );
