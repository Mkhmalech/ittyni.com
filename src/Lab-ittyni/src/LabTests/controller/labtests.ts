import { Dispatch } from "redux";
import { LabTestActions } from '../store/actions';
import { store } from '../../../../index';

export class Labtests {

    // private dispatch : Dispatch 
    private token : AuthToken

    constructor(token : AuthToken){
        this.token = token
    }

    labTestsFetching = () =>
        store.dispatch({
            type : LabTestActions.LAB_TESTS_FR_FETCH,
            payload : { 
                query : `query { AllLabTests_fr{ id name{ fr } finance{ Bcode } reference{ Mnemonic } specimen{ nature tubeColor anticoagulant numberoftube volumemin } } }` 
            },
            path : 'tests'
        })
    
    labTestsSearch = (name : string) => 
        store.dispatch({
            type : LabTestActions.LAB_TESTS_FR_SEARCH,
            payload : {
                query: `query { LabTestFrenchSearch(query : "${name}" ){ id name { fr } finance { Bcode } reference{ Mnemonic } specimen{ nature tubeColor anticoagulant numberoftube volumemin } } }`
            },
            path : 'tests'
        })
}