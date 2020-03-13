//actions types LabTestsListing
export enum LabTestsListingActions {
    FETCH_LABTESTSFR = "@@labtestslisting/FETCH_LABTESTSFR",
    FETCH_LABTESTSFR_ERROR = "@@labtestslisting/FETCH_LABTESTSFR_ERROR",
    RECEIVING_LABTESTSFR = "@@labtestslisting/RECEIVING_LABTESTSFR",
    SELECT_PANEL_TESTS = "@@labtestslisting/SELECT_PANEL_TESTS",
}

export interface HomeState {
    LabTests : LabTestsState
    Header : HeaderState
}
//test panel
export interface Test {
    name : string
    mnemonic : string
    price : Number
}

//labTests listing data 
export interface Reference {
    code: Number
    Mnemonic: String
    CPT: Number
}

export interface Names {
    fr: String
}

export interface Finance {
    Bcode: Number
}

export interface Data {
    reference: Reference
    name: Names
    finance: [Finance]
}

export interface LabTestsState {
    fetching: Boolean
    data?: Data[],
    Panel?: any[]
}

export interface HeaderState {
    Header : String
}