import { AnyAction } from 'redux';
import { LabTestActions } from './actions';
const initialState : LabTestState= {
    labtests : [],
    labtestsAll : []
}
export const LabTestReducer = (state=initialState, action : AnyAction) =>{
    switch (action.type) {
        case LabTestActions.LAB_TESTS_FR_FETCH_SUCCESS :

            return {
                ...state,
                labtests : action.payload
            }

        case LabTestActions.LAB_TESTS_FR_SEARCH_SUCCESS : 
            
            return {
                ...state,
                labtests : action.payload
            }
    
        case LabTestActions.LAB_TESTS_EN_FETCH_SUCCESS : 
            return {
                ...state,
                labtestsAll : action.payload.AllLabTests_en
            }
        default:
            return {
                ...state
            };
    }
}