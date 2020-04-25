import { AnyAction } from "redux";
import { UserActions } from './actions';
const initialState : any = {
    users : []
}

export const userReducer = (state=initialState, action: AnyAction) =>{
   const {payload, type} = action;
    switch (type) {
        case UserActions.USER_LIST_ALL_SUCCESS:
            return {
            ...state,
            users : payload.users.listAllWithRole 
            };
        case UserActions.USER_LIST_ALL_ERROR : 
            return { ...state };
        case UserActions.USER_FETCH_DETAILS_SUCCESS:
            return {
            ...state,
            userDetails : payload.users.getUserDetails
            };
        case UserActions.USER_LIST_ALL_ERROR : 
            return { ...state };
        case UserActions.USER_ADD_ROLE_SUCCESS:
            return {
            ...state,
            addRoleMssg : payload.roleAndPermissions.addRoleToUser
            };
        case UserActions.USER_ADD_ROLE_ERROR : 
            return { ...state, addRoleMssg : payload.roleAndPermissions.addRoleToUser };

        case UserActions.USER_FIND_ACCOUNT_SUCCESS:
            return {
            ...state,
            laboAccount : payload.searchLaboByName
            };
        case UserActions.USER_FIND_ACCOUNT_ERROR : 
            return { ...state, laboAccount : action.error };
            
        case UserActions.USER_LINK_ACCOUNT_SUCCESS:
            return {
            ...state,
            linkAccount : payload.linkAccountToUser
            };
        case UserActions.USER_LINK_ACCOUNT_ERROR : 
            return { ...state, linkAccount : action.error };
        default:
            return {...state};
    }
}
