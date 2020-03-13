import { action } from 'typesafe-actions';
import { LabTestsAdminActions } from './types';


//home page lab loaded LabTests
export const getLabTestsAdmin = () => action(LabTestsAdminActions.FETCHING_LABTESTS_ADMIN);

//Labtests fetching Tests succec
export const fetchAdminLabtestsSuccess = (data :any ) => action(LabTestsAdminActions.FETCHING_LABTESTS_ADMIN_SUCCESS, data)

//home page lab loaded LabTests
export const getLabTestAdmin = (name :String) => action(LabTestsAdminActions.FETCHING_LABTEST_ADMIN, name);

//Labtests fetching Tests succec
export const fetchAdminLabTestSuccess = (data :any ) => action(LabTestsAdminActions.FETCHING_LABTEST_ADMIN_SUCCESS, data)

export const labTestNameFrUpdating = (value: String) => action(LabTestsAdminActions.USER_UPDATING_NAME_FR, value)