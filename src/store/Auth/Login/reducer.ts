import { LoginPageState, LoginActionsTypes  } from "./types";
import { Reducer } from "redux";

const initialeState : LoginPageState = {
    isAuth          : false
}

const reducer : Reducer<LoginPageState> = (state=initialeState, action) => {

    switch(action.type){
        
        case LoginActionsTypes.HANDLE_EMAIL_ENTERING : 

            return {...state, Email : action.payload}
        
        case LoginActionsTypes.HANDLE_PASSWORD_ENTERING : 

            return {...state, Password : action.payload}

        case LoginActionsTypes.FETCHING_USER_SUCCESS : 

            return {...action.payload, isAuth : true}
        
        default : return {...state}
    }
};


export {reducer as LoginReducer}