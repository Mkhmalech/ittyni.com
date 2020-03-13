export enum LabTestsAdminActions {

    //fetching All LabTests
    FETCHING_LABTESTS_ADMIN = '@@adminlabtests/FETCHING_LABTESTS_ADMIN',
    FETCHING_LABTESTS_ADMIN_SUCCESS = '@@adminlabtests/FETCHING_LABTESTS_ADMIN_SUCCESS',
    FETCHING_LABTESTS_ADMIN_FAILURE = '@@adminlabtests/FETCHING_LABTESTS_ADMIN_FAILURE',

    //fetch labTest by name
    FETCHING_LABTEST_ADMIN          = '@@adminlabtest/FETCHING_LABTEST_ADMIN',
    FETCHING_LABTEST_ADMIN_SUCCESS  = '@@adminlabtest/FETCHING_LABTEST_ADMIN_SUCCESS',
    FETCHING_LABTEST_ADMIN_FAILURE  = '@@adminlabtest/FETCHING_LABTEST_ADMIN_FAILURE',

    //Updating Test Page
    OPEN_SECTION = "@@adminlabtestupdate/OPEN_SECTION",
    CLOSE_SECTION = "@@adminlabtestupdate/CLOSE_SECTION",

    /*******************************
      -  updating LabTest actions
    */

    //Update Title

    //update Names
    USER_UPDATING_NAME_FR = "@adminlabtestupdate/USER_UPDATING_NAME_FR",

    //Update Necessary data
    USER_UPDATE_NECESSARY_DATA = "@adminlabtestupdate/UPDATE_NECESSARY_DATA"

}


//labTests listing data 
export interface Reference {
    code: Number
    Mnemonic: String
    CPT: Number
}

export interface Names {
    en : String
    fr?: string
}

export interface Finance {
    Bcode: Number
}

export interface Data {
    reference: Reference
    name: Names
    finance: [Finance]
}

export interface LabTestUpdate {
    
}

export interface LabTestsAdminState {
    fetching: Boolean
    data?: Data[]
    LabTest? : Data
}
