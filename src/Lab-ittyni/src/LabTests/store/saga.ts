import { all, call, fork, put, takeEvery } from 'redux-saga/effects'
import * as config from '../../../../store/config';
import { LabTestActions } from './actions';




function* LabTestFrListFetch({path, payload} : any){

    try{

        // yield put({type : CatalogActions.CATALOG_LIST_ALL_TESTS_FROM_API_FETCHING});

        const res = yield call(config.callApi, 'post', config.api, path, payload );

        if(!res) {
            yield put({
                type: "", 
                error : res.errors[0].message
            })
        }

        else {

            yield put({
                type : LabTestActions.LAB_TESTS_FR_FETCH_SUCCESS, 
                payload : res.data.AllLabTests_fr
            })
        }

    } catch(e) {
        throw new Error(e); 
    }
}
/**
 * 
 */
function* LabTestsFrSearch({path, payload} : any){
    try{

        // yield put({type : CatalogActions.CATALOG_LIST_ALL_TESTS_FROM_API_FETCHING});

        const res = yield call(config.callApi, 'post', config.api, path, payload );

        if(!res) {
            yield put({
                type: LabTestActions.LAB_TESTS_FR_SEARCH_ERROR, 
                error : res.errors[0].message
            })
        }

        else {

            yield put({
                type : LabTestActions.LAB_TESTS_FR_SEARCH_SUCCESS, 
                payload : res.data.LabTestFrenchSearch
            })
        }

    } catch(e) {
        throw new Error(e); 
    }
}

//watcher func dispatcher
function* watchLabTest(){

    // fetch tests form server 
    yield takeEvery(LabTestActions.LAB_TESTS_FR_FETCH, LabTestFrListFetch)
    yield takeEvery(LabTestActions.LAB_TESTS_FR_SEARCH, LabTestsFrSearch)
}

export function* LabTestSaga(){
    yield all([fork(watchLabTest)])
}