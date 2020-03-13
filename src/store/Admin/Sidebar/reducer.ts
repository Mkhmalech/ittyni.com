import { adminLayoutState, AdminLayoutActionTypes } from "./types";
import { Reducer } from "redux";



export const initialState : adminLayoutState = {
        sidebarToggled : false
    }


const reducer: Reducer<adminLayoutState> = (state= initialState, action) => {
    switch( action.type) {
        case AdminLayoutActionTypes.SIDEBAR_HIDE:{
            return {...state, sidebarToggled : true}
        }

        case AdminLayoutActionTypes.SIDEBAR_SHOW: {
            return {...state, sidebarToggled : false}
        }
        default : return {...state};
    }
}

export {reducer as adminLayoutReducer}