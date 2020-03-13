import { action } from 'typesafe-actions';
import { LoginActionsTypes, LoginPageState } from './types';

//user enter email or username
export const userEnterEmail = (email : String) => action(LoginActionsTypes.HANDLE_EMAIL_ENTERING, email);

//user enter password
export const userEnterPassword = (password : String) => action(LoginActionsTypes.HANDLE_PASSWORD_ENTERING, password);

//user click submit button
export const userAskForLogin = (user : Object) => action(LoginActionsTypes.HANDLE_SUBMITTING, user);

//user waiting to fetching data

//fetching error

//user success to login 
export const fetchUserSuccess = (userData : LoginPageState) => action(LoginActionsTypes.FETCHING_USER_SUCCESS, userData)

//user redirecting to authenticated website