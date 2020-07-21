import { Reducer, AnyAction } from 'redux';
import { AdminActions } from './actions';
const initialState : AdminState={
    sidebar : false
}

export const adminReducer : Reducer = (state= initialState, action : AnyAction) => {
    switch (action.type) {
        case AdminActions.ADMIN_LAYOUT_CLOSE_OPEN_SIDBAR:
            console.log(action)
            return{...state, sidebar : !state.sidebar};
        default:
            return{...state};
    }
}