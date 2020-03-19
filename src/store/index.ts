import { RouterState, connectRouter } from 'connected-react-router'
import { History } from 'history'
import { combineReducers } from 'redux'

// import reducers and states
import  webReducers, { WebState }  from './webSite'
// import  AuthReducers from './Auth'
import adminReducers,  { AdminState } from './Admin'

// import sagas 
//===> from Auth Pages  
import LoginSaga from './Auth/Login/saga'

//===> from Web App Pages
import LabTestsListingSaga from './webSite/home/saga'

//===> from Administration
import LabTestsListingAdminSaga from './Admin/Lab/LabTests/saga'

//===> from saga middleware
import { fork, all } from 'redux-saga/effects'


export interface IttyniState {
    adminStates : AdminState
    WebStates   : WebState
    // AuthStates  : AuthStates
    router      : RouterState
}

export const createRootReducer = (history : History)=>
    combineReducers({
        adminStates  : adminReducers,
        WebStates    : webReducers,
        // AuthStates   : AuthReducers,
        router: connectRouter(history)
    })
//==============>rootReducer end

export function* rootSaga(){
    yield all([
        //Auth Sagas
        fork(LoginSaga), 

        //web application sagas
        fork(LabTestsListingSaga),

        //Administration Sagas
        fork(LabTestsListingAdminSaga)
    ])
}