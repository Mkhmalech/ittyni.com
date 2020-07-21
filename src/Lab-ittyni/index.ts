import { LabTestReducer } from './src/labTests/store/reducer'
import { combineReducers } from 'redux';
import { LabLaboReducer } from './src/labos/store/reducer';

// lab tests
export * from './src/labTests'
export * from './src/labTests/web/LabTestSearch'
export * from './src/labTests/store/saga'

// lab labos
export * from './src/labos/web/LaboSearch'

export const rootLabReducer = combineReducers({
    test : LabTestReducer,
    labo : LabLaboReducer
})