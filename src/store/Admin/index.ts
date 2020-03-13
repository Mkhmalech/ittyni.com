import { adminLayoutState } from "./Sidebar/types";
import { adminLayoutReducer } from './Sidebar/reducer'
import { combineReducers } from "redux";
import { LabTestsAdminState } from "./Lab/LabTests/types";
import { adminLabTestsReducer } from "./Lab/LabTests/reducer";

export interface AdminState {
    adminLayout : adminLayoutState
    adminLabTests    : LabTestsAdminState  
}

export default combineReducers({
    adminLayout : adminLayoutReducer,
    adminLabTests : adminLabTestsReducer
})