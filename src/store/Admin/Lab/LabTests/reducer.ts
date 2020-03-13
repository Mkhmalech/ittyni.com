import { Reducer } from "redux";
import { LabTestsAdminState, LabTestsAdminActions } from "./types";

const intitialState: LabTestsAdminState = {
    fetching : false
}

const reducer : Reducer<LabTestsAdminState> = (state=intitialState , action) => {
    switch(action.type) {

        case LabTestsAdminActions.FETCHING_LABTESTS_ADMIN : 

            return {...state, fetching : true}

        case LabTestsAdminActions.FETCHING_LABTESTS_ADMIN_SUCCESS : 

            
            return {...state, fetching : false,data : action.payload}
        
        case LabTestsAdminActions.FETCHING_LABTEST_ADMIN : 

            return {...state, fetching : true}

        case LabTestsAdminActions.FETCHING_LABTEST_ADMIN_SUCCESS : 

            
            return {...state, fetching : false, LabTest : action.payload}

        /* case LabTestsAdminActions.USER_UPDATING_NAME_FR :

            if(state.LabTest) { 
                state.LabTest.name.fr = action.payload
                
                return {...state, LabTest : state.LabTest}
            } else {
        
                return {...state, LabTest : state.LabTest}
            }
         */

        case "THIS_IS_A_TEST" : 
            
            return {...state, fetching : true}
        
        default : return {...state}
    }
};

export { reducer as adminLabTestsReducer}