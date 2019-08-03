import * as TimerActions from '../timer.actions';
export const timer = (state: number = TimerActions.STATE_STOP, action) => {
    switch (action.type) {
        case TimerActions.START:
            return TimerActions.STATE_START;
        case TimerActions.STOP:
            return TimerActions.STATE_STOP;
        case TimerActions.RESET:
            return TimerActions.STATE_RESET;
        default:
            return TimerActions.STATE_STOP;
    }
}
