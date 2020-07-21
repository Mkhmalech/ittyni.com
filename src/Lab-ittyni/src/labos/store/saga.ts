import { all, call, fork, put, takeEvery } from 'redux-saga/effects'
import * as config from '../../../../store/config';
import { LaboActions } from './actions';
import { AnyAction } from 'redux';


function* tryFetching(path: string, payload : string, actionWhenFailed : string, actionWhenSuccesses : string){
    try{
        const res = yield call(config.callApi, 'post', config.api, path, payload );

        if(!res) {
            yield put({
                type: actionWhenFailed, 
                error : res.errors[0].message
            })
        }

        else {

            yield put({
                type : actionWhenSuccesses, 
                payload : res.data
            })
        }

    } catch(e) {
        throw new Error(e); 
    }
}

/**
 * labo fetch all
 * @param path
 * @param payload
 */
function* LaboFetchAll({path, payload} : AnyAction) {
    yield tryFetching(
        path,
        payload,
        LaboActions.LAB_LABOS_FETCH_ALL_ERROR,
        LaboActions.LAB_LABOS_FETCH_ALL_SUCCESS
    )
}
/**
 * labo fetch details
 */
function* LaboFetchDetails({path, payload} : AnyAction){
    yield tryFetching(
        path,
        payload,
        LaboActions.LAB_LABO_FETCH_DETAILS_ERROR,
        LaboActions.LAB_LABO_FETCH_DETAILS_SUCCESS
    )
}
//watcher func dispatcher
function* watchLabLabo(){

    // fetch tests form server 
    yield takeEvery(LaboActions.LAB_LABOS_FETCH_ALL, LaboFetchAll)
    yield takeEvery(LaboActions.LAB_LABO_FETCH_DETAILS, LaboFetchDetails)
}

export function* LabLaboSaga(){
    yield all([fork(watchLabLabo)])
}