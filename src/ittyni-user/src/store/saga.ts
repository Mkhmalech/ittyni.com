import { all, fork, takeEvery } from 'redux-saga/effects'
import { AnyAction } from 'redux';
import { tryFetching } from '../../../store/config'
import { UserActions } from './actions';

/**
 * users fetch all
 */
function*  userFetchAll({path, payload} : AnyAction){yield tryFetching(path, payload, UserActions.USER_LIST_ALL_ERROR, UserActions.USER_LIST_ALL_SUCCESS)}

/**
 * user fetch details
 */
function*  userFetchDetails({path, payload} : AnyAction){yield tryFetching(path, payload, UserActions.USER_FETCH_DETAILS_ERROR, UserActions.USER_FETCH_DETAILS_SUCCESS)}
/**
 * add role to user
 */
function*  userAddRole({path, payload} : AnyAction){yield tryFetching(path, payload, UserActions.USER_ADD_ROLE_ERROR, UserActions.USER_ADD_ROLE_SUCCESS)}
/**
 * link account to user
 */
function*  userFindAccount({path, payload} : AnyAction){yield tryFetching(path, payload, UserActions.USER_FIND_ACCOUNT_ERROR, UserActions.USER_FIND_ACCOUNT_SUCCESS)}
/**
 * link account to user
 */
function*  userLinkAccount({path, payload} : AnyAction){yield tryFetching(path, payload, UserActions.USER_LINK_ACCOUNT_ERROR, UserActions.USER_LINK_ACCOUNT_SUCCESS)}

//watcher func dispatcher
function* watchUser(){

    // fetch tests form server 
    yield takeEvery(UserActions.USER_LIST_ALL, userFetchAll);
    yield takeEvery(UserActions.USER_FETCH_DETAILS, userFetchDetails);
    yield takeEvery(UserActions.USER_ADD_ROLE, userAddRole);
    yield takeEvery(UserActions.USER_FIND_ACCOUNT, userFindAccount);
    yield takeEvery(UserActions.USER_LINK_ACCOUNT, userLinkAccount);
}

export function* UserSaga(){
    yield all([fork(watchUser)])
}