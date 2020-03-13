import { Reducer, combineReducers } from "redux"
import  homeReducer  from './home/reducer';
import { HomeState } from "./home/types";

export interface WebState {
    homeState : HomeState
}



export default combineReducers({
    homeState : homeReducer
})