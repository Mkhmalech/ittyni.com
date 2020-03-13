import {LabTestsListingActions } from "./types";
import { all, call, fork, put, takeEvery } from 'redux-saga/effects'
import { callApi } from "../../config";
import { fetchLabtestsFrSuccess } from "./actions";

const requestBody = {
    query : `
        query {
            AllLabTests_fr{
            name {
                fr
            }
            finance {
                Bcode
            }
            reference {
                Mnemonic
            }
        }}    
    `
}

const searchLabTestFrNameMnemBody = (query : String)=>({
    query : `
        query {
            LabTestFrenchSearch(query : "${query}"){
                name {
                  fr
                }
                reference {
                  Mnemonic
                }
                finance {
                  Bcode
                }
            }
        }
    `
})

function* handleFetchLabTests(){
    try{
        const res = yield call(callApi, 'post', "http://localhost:8080", 'tests', requestBody);

        if(res.errors){
            yield console.log(res.errors[0].message)
        } else {
            // console.log(typeof res.data.AllLabTests_fr)
            yield put(fetchLabtestsFrSuccess([...res.data.AllLabTests_fr]))
        }
    } catch(e) {
        throw new Error(e);
    }
}

function* handleSearchLabTestFrenchNameMnemonic(action : any){

    try{
        const res = yield call(callApi, 'post', "http://localhost:8080", 'tests',searchLabTestFrNameMnemBody(action.query))

        if(res.errors){
            yield console.log(res.errors[0].message)
        } else {
           yield put({type : "LABTEST_SEARCH_FRENCH_NAME_MNEMONIC_FINISHED", Tests : [...res.data.LabTestFrenchSearch]})
        }
    } catch(e){
        throw new Error(e);
    }
}

function* watchFetchLabTests(){
    yield takeEvery(LabTestsListingActions.FETCH_LABTESTSFR , handleFetchLabTests)
    yield takeEvery("LABTEST_SEARCH_FRENCH_NAME_MNEMONIC" , handleSearchLabTestFrenchNameMnemonic)
}

function* LabTestsListingSaga(){
    yield all([fork(watchFetchLabTests)])
}

export default LabTestsListingSaga