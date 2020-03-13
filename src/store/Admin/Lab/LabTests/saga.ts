import { LabTestsAdminActions } from "./types";
import { all, call, fork, put, takeEvery } from 'redux-saga/effects'
import { callApi } from "../../../config";
import { fetchAdminLabtestsSuccess, fetchAdminLabTestSuccess } from "./actions";
import * as Gql from './GqlRequests'


const requestLabTestsAdmin = {
    query: `
        query {
            AllLabTests_en {
                name {
                    en
                    fr
                }
                reference {
                    Mnemonic
                    CPT
                    code
                }
                finance {
                    Bcode
                }
            }
       }    
    `
}

const requestLabTestAdmin = (name: String) => ({
    query: `
        query {
            LabTestView_en(name : {en : "${name}"}){
                id
                name {
                    en
                    fr
                }
                reference {
                    CPT
                    code
                    Mnemonic
                }
                
                finance {
                    Bcode
                    country
                }
            }
        }
    `
})

function* handleFetchLabTestsAdmin() {
    try {
        const res = yield call(callApi, 'post', "http://localhost:8080", 'tests', requestLabTestsAdmin);

        if (res.errors) {
            yield console.log(res.errors[0].message)
        } else {
            // console.log(typeof res.data.AllLabTests_fr)
            yield put(fetchAdminLabtestsSuccess([...res.data.AllLabTests_en]))
        }
    } catch (e) {
        throw new Error(e);
    }
}

function* handleFetchLabTestAdmin(action: any) {
    const name: String = action.payload;
    try {
        const res = yield call(callApi, 'post', "http://localhost:8080", 'tests', requestLabTestAdmin(name));

        if (res.errors) {
            yield console.log(res.errors[0].message)
        } else {
            // console.log(res.data.LabTestView_en)
            yield put(fetchAdminLabTestSuccess({ ...res.data.LabTestView_en }))
        }
    } catch (e) {
        throw new Error(e);
    }
}

//ask api server to update fr name
function* userUpdateTestNameFr(action : any){

    yield console.log(Gql.LabTestUpdateDataMutation(action.payload))
    yield console.log(action.payload)
    try{

        const res = yield call(callApi, 'post',  "http://localhost:8080", 'tests', Gql.LabTestUpdateDataMutation(action.payload))

        if(res.errors){

            yield new Error(res.errors[0].message)
        } else {
            console.log(res)
        }

    } catch(e){
        throw new Error(e);
    }
}

function* watchFetchLabTestsAdmin() {
    yield takeEvery(LabTestsAdminActions.FETCHING_LABTESTS_ADMIN, handleFetchLabTestsAdmin);
    yield takeEvery(LabTestsAdminActions.FETCHING_LABTEST_ADMIN, handleFetchLabTestAdmin);
    yield takeEvery(LabTestsAdminActions.USER_UPDATE_NECESSARY_DATA, userUpdateTestNameFr)
}

//this is for Saga forking
function* LabTestsListingAdminSaga() {
    yield all([fork(watchFetchLabTestsAdmin)])
}

export default LabTestsListingAdminSaga