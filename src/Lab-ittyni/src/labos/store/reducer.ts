import { AnyAction, Reducer } from 'redux';
import { LaboActions } from './actions';

const initialState : LabLaboState = {}
export const LabLaboReducer : Reducer<LabLaboState> = (state=initialState, action : AnyAction) =>{
    switch (action.type) {
        case LaboActions.LAB_LABOS_FETCH_ALL_SUCCESS:
            return {...state, listAll : action.payload.LaboListAll};
        case LaboActions.LAB_LABO_FETCH_DETAILS_SUCCESS : 
            return{ ...state, laboDetails : action.payload.LaboDetails}
        default:
            return{...state};
    }
    
}