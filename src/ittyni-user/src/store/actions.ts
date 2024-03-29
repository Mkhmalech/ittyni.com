export enum UserActions {

    // list all
    USER_LIST_ALL = '@@user/USER_LIST_ALL',
    USER_LIST_ALL_ERROR = '@@user/USER_LIST_ALL_ERROR',
    USER_LIST_ALL_SUCCESS = '@@user/USER_LIST_ALL_SUCCESS',
    
    // show user details
    USER_FETCH_DETAILS = '@@user/USER_FETCH_DETAILS',
    USER_FETCH_DETAILS_ERROR = '@@user/USER_FETCH_DETAILS_ERROR',
    USER_FETCH_DETAILS_SUCCESS = '@@user/USER_FETCH_DETAILS_SUCCESS',

    // add role to user
    USER_ADD_ROLE = '@@user/USER_ADD_ROLE',
    USER_ADD_ROLE_ERROR = '@@user/USER_ADD_ROLE_ERROR',
    USER_ADD_ROLE_SUCCESS = '@@user/USER_ADD_ROLE_SUCCESS',

    // add role to user
    USER_FIND_ACCOUNT = '@@user/USER_FIND_ACCOUNT',
    USER_FIND_ACCOUNT_ERROR = '@@user/USER_FIND_ACCOUNT_ERROR',
    USER_FIND_ACCOUNT_SUCCESS = '@@user/USER_FIND_ACCOUNT_SUCCESS',

    // add role to user
    USER_LINK_ACCOUNT = '@@user/USER_LINK_ACCOUNT',
    USER_LINK_ACCOUNT_ERROR = '@@user/USER_LINK_ACCOUNT_ERROR',
    USER_LINK_ACCOUNT_SUCCESS = '@@user/USER_LINK_ACCOUNT_SUCCESS',

}