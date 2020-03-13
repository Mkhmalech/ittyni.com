import { action } from 'typesafe-actions';
import { LabTestsListingActions } from './types';


//home page lab loaded LabTests
export const getLabTestsFr = () => action(LabTestsListingActions.FETCH_LABTESTSFR);

//Labtests fetching Tests succec
export const fetchLabtestsFrSuccess = (data :any ) => action(LabTestsListingActions.RECEIVING_LABTESTSFR, data)

//LabTests User Select Panel
export const selectPanelTests = ({name, price, mnemonic} : any) =>action(LabTestsListingActions.SELECT_PANEL_TESTS, {name, price, mnemonic})

//Search dispatch
// export const searchLabTestFrByNameMnemonic = () => action()