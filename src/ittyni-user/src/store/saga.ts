import { all, fork, takeEvery } from 'redux-saga/effects'
import { AnyAction } from 'redux';
import { tryFetching } from '../../../store/config'
import { UserActions } from './actions';

/**
 * labo fetch details
 */
function*  userFetchAll({path, payload} : AnyAction){
    yield tryFetching(
        path,
        payload,
        UserActions.USER_LIST_ALL_ERROR,
        UserActions.USER_LIST_ALL_SUCCESS
    )
}
//watcher func dispatcher
function* watchUser(){

    // fetch tests form server 
    yield takeEvery(UserActions.USER_LIST_ALL, userFetchAll)
}

export function* UserSaga(){
    yield all([fork(watchUser)])
}