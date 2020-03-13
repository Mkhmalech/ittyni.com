import { all, call, fork, put, takeEvery } from 'redux-saga/effects'
import {LoginActionsTypes} from './types'
import {callApi} from '../../config'
import { fetchUserSuccess } from './actions'

const requestUser =(email : String , password: String) => ({
    query :`
        query {
            login(userInput: {email: "${email}", password: "${password}"}) {
                userId
                token
                tokenExpired
        }}
    `
})

function* handleFetchUser(action: any){
    const {email , password} = action.payload;
    const requestBody = requestUser(email, password)
    try {
        const res = yield call(callApi,'post', "http://localhost:8080", 'users', requestBody);
        
        if(res.errors){
            yield console.log(res.errors[0].message)
        } else {
            yield put(fetchUserSuccess({...res.data.login, isAuth : true}))
        }
    } catch(e) {
        throw new Error(e);
    }
}

function* watchFetchUser(){
    yield takeEvery(LoginActionsTypes.HANDLE_SUBMITTING, handleFetchUser)
}

function* LoginSaga(){
    yield all([fork(watchFetchUser)])
}

export default LoginSaga;