import { AnyAction } from 'redux';
import { LabTestActions } from './actions';
const initialState : LabTestState= {
    labtests : [],
    labtestsAll : []
}
export const LabTestReducer = (state=initialState, action : AnyAction) =>{
    switch (action.type) {
        case LabTestActions.LAB_TESTS_FR_FETCH_SUCCESS :
            return { ...state, labtests : action.payload }

        case LabTestActions.LAB_TESTS_FR_SEARCH_SUCCESS :             
            return { ...state, labtests : action.payload  }
    
        case LabTestActions.LAB_TESTS_EN_FETCH_SUCCESS : 
            return { ...state, labtestsAll : action.payload.AllLabTests_en }

        case LabTestActions.LAB_TESTS_EN_FETCH_DETAILS_SUCCESS : 
            return { ...state, labTestEnDetails : action.payload.LabTestView_en }

        case LabTestActions.LAB_TESTS_FR_FETCH_DETAILS_SUCCESS : 
            return { ...state, labTestFrDetails : action.payload.LabTestView_fr }

        case LabTestActions.LAB_TEST_DETAILS_UPDATE_SUCCESS : 
            return { ...state }

        case LabTestActions.LAB_TESTS_FILTER_BY_EN_NAME_SUCCESS : 
            return { ...state, labtestsAll : action.payload.nameEnFilter }
            
        default:
            return { ...state };
    }
}