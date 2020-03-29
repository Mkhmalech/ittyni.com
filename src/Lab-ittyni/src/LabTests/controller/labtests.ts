import { LabTestActions } from '../store/actions';
import { store } from '../../../../index';

export class Labtests {

    private token : string | null = localStorage.getItem('TTUID')

    constructor(){}

    labTestAllList = () => store.dispatch({
        type : LabTestActions.LAB_TESTS_EN_FETCH,
        payload : {
            query : `query{AllLabTests_en{name{en fr}reference{Mnemonic} finance{Bcode}}}`
        },
        path:'tests'
    })

    labTestsFetching = () =>
        store.dispatch({
            type : LabTestActions.LAB_TESTS_FR_FETCH,
            payload : { 
                query : `query{AllLabTests_fr{id name{fr}finance{Bcode}reference{Mnemonic}specimen{nature tubeColor anticoagulant numberoftube volumemin}}}` 
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