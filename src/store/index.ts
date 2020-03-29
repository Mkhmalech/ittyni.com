import { RouterState, connectRouter } from 'connected-react-router'
import { History } from 'history'
import { combineReducers } from 'redux'
import { rootLabReducer, LabTestSaga } from '../lab-ittyni/index'
// import reducers and states
// import  webReducers, { WebState }  from './webSite'
import  AuthReducers from '../authentification-redux-lib/src/store/reducer'
// import adminReducers,  { AdminState } from './Admin'

// // import sagas 
// //===> from Auth Pages  
// import LoginSaga from './Auth/Login/saga'

// //===> from Web App Pages
// import LabTestsListingSaga from './webSite/home/saga'

// //===> from Administration
// import LabTestsListingAdminSaga from './Admin/Lab/LabTests/saga'

//===> from saga middleware
import { fork, all } from 'redux-saga/effects'
import AuthSaga from '../authentification-redux-lib/src/store/saga'
import { admin, sidebar } from '../admin/common/adminWrappers';
import { adminReducer } from '../admin/store/reducers';


export interface IttyniState {
     labState   : LabState
    // WebStates   : WebState
    Auth        : AuthState
    admin       : AdminState
    router      : RouterState
}

export const createRootReducer = (history : History)=>
    combineReducers({
        labState        : rootLabReducer,
        // WebStates    : webReducers,
        admin           : adminReducer,
        Auth   : AuthReducers,
        router: connectRouter(history)
    })
//==============>rootReducer end

export function* rootSaga(){
    yield all([
        //lab Test Sagas
        fork(LabTestSaga), 

        // web application sagas
        fork(AuthSaga),

        // //Administration Sagas
        // fork(LabTestsListingAdminSaga)
    ])
}