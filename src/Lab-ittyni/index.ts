import { LabTestReducer } from './src/labTests/store/reducer'
import { combineReducers } from 'redux';

export * from './src/labTests'
export * from './src/labTests/web/LabTestSearch'
export * from './src/labTests/store/saga'

export const rootLabReducer = combineReducers({
    test : LabTestReducer
})