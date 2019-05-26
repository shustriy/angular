import * as CounterActions from '../counter.actions';
export const counterReducer = (state: number = 0, action) => {
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
}
