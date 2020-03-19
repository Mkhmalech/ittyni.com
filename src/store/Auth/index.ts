import { combineReducers } from "redux";
import { LoginReducer } from './Login/reducer'
import { SignupReducer } from './Signup/reducer'
import { PassResetpReducer } from './PassReset/reducer'


export default combineReducers({
    Login       : LoginReducer,
    Signup      : SignupReducer,
    PassReset   : PassResetpReducer,
})