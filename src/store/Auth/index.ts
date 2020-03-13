import { combineReducers } from "redux";
import { LoginReducer } from './Login/reducer'
import { SignupReducer } from './Signup/reducer'
import { PassResetpReducer } from './PassReset/reducer'
import { LoginPageState } from "./Login/types";

export interface AuthStates {
    Login       : LoginPageState
    Signup      : String
    PassReset   : String
}


export default combineReducers({
    Login       : LoginReducer,
    Signup      : SignupReducer,
    PassReset   : PassResetpReducer,
})