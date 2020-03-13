//Login page actions
export enum LoginActionsTypes{
    HANDLE_EMAIL_ENTERING       = '@@login/HANDLE_EMAIL_ENTERING',
    HANDLE_PASSWORD_ENTERING    = '@@login/HANDLE_PASSWORD_ENTERING',
    HANDLE_SUBMITTING           = '@@login/HANDLE_SUBMITTING',
    FETCHING_USER_DATA          = '@@login/FETCHING_USER_DATA',
    FETCHING_USER_ERROR         = '@@login/FETCHING_USER_ERROR',
    FETCHING_USER_SUCCESS       = '@@login/FETCHING_USER_SUCCESS'
}

//login page interface 
export interface LoginPageState {
    isAuth           : Boolean
    Email?           : String
    Password?        : String
    userId?          : String
    token?           : String
    tokenExpired?    : number
}

//