import { store } from "../../../..";
import { LaboActions } from "../store/actions";

export class Labos {

    constructor(){}

    /**
     * list All laboratories 
     */
    LaboListAll = () => 
        this.makeRequest(
            LaboActions.LAB_LABOS_FETCH_ALL, 
            `query{LaboListAll{account{name code}contact{tele{fix fax}address{street}}}}`
        )
    ;

    /**
     * labo detail request
     */
    laboDetailsFetch = (labo : string) =>
            this.makeRequest(
                LaboActions.LAB_LABO_FETCH_DETAILS,
                `query{LaboDetails(name:"${labo}"){account{name code}contact{tele{fix fax}address{street}}}}`
            )
    /**
     * make Request to api
     * with customize params
     */
    makeRequest = (
        action : string,
        payload : string
    ) => store.dispatch({
        type : action,
        payload : {query : payload },
        path : 'labos'
    })
}