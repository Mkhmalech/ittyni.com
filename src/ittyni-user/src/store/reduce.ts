import { AnyAction } from "redux";
import { UserActions } from './actions';
const initialState : any = {
    users : []
}

export const userReducer = (state=initialState, action: AnyAction) =>{
   const {payload, type} = action;
    switch (type) {
        case UserActions.USER_LIST_ALL_SUCCESS:
            return {
            ...state,
            users : payload.users.listAllWithRole 
            };
        case UserActions.USER_LIST_ALL_ERROR : 
            console.log("ERROR")
            return { ...state };
        default:
            return {...state};
    }
}
