import { LabTestActions } from "../store/actions";
import { store } from "../../../../index";

export class Labtests {
  private token: string | null = localStorage.getItem("TTUID");

  // LabTest Identification
  private LabTestTitle?: LabTestTitle;
  private LabTestNameEn?: LabTestNameEn;
  private LabTestNameFr?: LabTestNameFr;

  // LabTest Classification
  private LabTestDepartement?: LabTestDepartement[];
  private LabTestPanels?: LabTestPanels;
  private LabTestMoleculeFamily?: LabTestMoleculeFamily;

  // LabTest Reference
  private LabTestReferenceCode?: LabTestReferenceCode;
  private LabTestReferenceCpt?: LabTestReferenceCpt;
  private LabTestReferenceMnemonic?: LabTestPanelReferenceMnemonic;

  // LabTest Finance
  private LabTestFinanceBCode?: Number;
  private LabTestFinanceCountry?: LabTestFinanceCountry;

  // LabTest Pre-Analytique Process
  private LabTestSampleType?: String[];
  private LabTestSampleVolumeMin?: Number;
  private LabTestSampleStabilityTemperature?: Number;
  private LabTestSampleStabilityPeriod?: Number;
  private LabTestSampleTransportTemperature?: Number;
  private LabTestSampleTransportPeriod?: Number;
  private LabTestSampleCollectorCollor?: String[];
  private LabTestSampleCollectorAnticoagulant?: String;
  private LabTestSampleCollectorQuantity?: Number;
  private LabTestSample?: LabTestSample;

  constructor() {}

  labTestAllList = () =>
    store.dispatch({
      type: LabTestActions.LAB_TESTS_EN_FETCH,
      payload: {
        query: `query{AllLabTests_en{name{en fr}reference{Mnemonic} finance{Bcode}}}`
      },
      path: "tests"
    });

  labTestsFetching = () =>
    store.dispatch({
      type: LabTestActions.LAB_TESTS_FR_FETCH,
      payload: {
        query: `query{AllLabTests_fr{id name{fr}finance{Bcode}reference{Mnemonic}specimen{nature tubeColor anticoagulant numberoftube volumemin}}}`
      },
      path: "tests"
    });

  labTestsSearch = (name: string) =>
    store.dispatch({
      type: LabTestActions.LAB_TESTS_FR_SEARCH,
      payload: {
        query: `query{LabTestFrenchSearch(query:"${name}"){id name{fr}finance{Bcode}reference{Mnemonic}specimen{nature tubeColor anticoagulant numberoftube volumemin } } }`
      },
      path: "tests"
    });
  /**
   * get all details of labtest
   * @param name_of_the_test_en
   */
  labTestEnFetchDetails = (name: LabTestNameEn) =>
    store.dispatch({
      type: LabTestActions.LAB_TESTS_EN_FETCH_DETAILS,
      payload: {
        query: `query{LabTestView_en(name:{en : "${name}"}){id name{en fr}reference{CPT code Mnemonic}finance{Bcode}specimen{nature tubeColor anticoagulant numberoftube volumemin}}}`
      },
      path: "tests"
    });
  /**
   * get all details of labtest
   * @param name_of_the_test_fr
   */
  labTestFrFetchDetails = (name: LabTestNameEn) =>
    store.dispatch({
      type: LabTestActions.LAB_TESTS_FR_FETCH_DETAILS,
      payload: {
        query: `query{LabTestView_fr(name:"${name}"){id name{fr}reference{Mnemonic}finance{Bcode}specimen{nature tubeColor anticoagulant numberoftube volumemin}}}`
      },
      path: "tests"
    });

    filterTestsList =(name : LabTestNameEn) => store.dispatch({
      type : LabTestActions.LAB_TESTS_FILTER_BY_EN_NAME,
      payload : {
        query : `query{nameEnFilter(en: "${name}"){name{en fr}reference{Mnemonic} finance{Bcode}}}`
      },
      path:'tests'
    })
  /******************************
   * Update TestLab Parameters
   *****************************/

  public setLabTestTitle = (Title: LabTestTitle) => (this.LabTestTitle = Title);

  /***********************
   * Update Names
   ***********************/
  public setLabTestNameEn = (nameEn: string) => (this.LabTestNameEn = nameEn);

  public setLabTestNameFr = (nameFr: LabTestNameFr) =>
    (this.LabTestNameFr = nameFr);

  // public dispatchLabtestNameFr = (value: String) =>
  //   this.dispatch(action(LabTestsAdminActions.USER_UPDATING_NAME_FR, value));

  public getLabTestNameFr = () => this.LabTestNameFr;

  // public dispatchUpdateNames = () => this.dispatch(action(LabTestsAdminActions.USER_UPDATING_NAME_FR));

  /***********************
   * Update Reference
   ***********************/
  public setCPTCode = (cpt: string) => (this.LabTestReferenceCpt = Number(cpt));
  public setMnemonic = (mnemonic: string) =>
    (this.LabTestReferenceMnemonic = mnemonic);
  public getreference = () => {};

  /**************************
   * Update Classification
   **************************/
  public setLabTestDepartement = (testDepatemant: LabTestDepartement) =>
    (this.LabTestDepartement = testDepatemant);

  /******************************
   * Update Finace
   ******************************/
  public setFinanceBCode = (bcode: String) =>
    (this.LabTestFinanceBCode = Number(bcode));
  /******************************
   * Update Sample Requirements
   ******************************/
  public setSampleType = (sampleType: String) =>
    (this.LabTestSampleType = sampleType.split(" "));
  public setSampleCollectorColor = (SampleCollectorCollor: String) =>
    (this.LabTestSampleCollectorCollor = SampleCollectorCollor.split(" "));
  public setSampleCollectorQuantity = (SampleCollectorQuantity: String) =>
    (this.LabTestSampleCollectorQuantity = Number(SampleCollectorQuantity));
  public setSampleVolumeMin = (volMin: String) => {
    this.LabTestSampleVolumeMin = Number(volMin);
  };
  public setSampleStabilityTemperature = () => {};
  public setSampleStabilityPeriod = () => {};
  public setSampleTransportTemperature = () => {};
  public setSampleTransportPeriod = () => {};
  public setSampleCollectorAnticoagulant = () => {};

  public getSampleCollectorColor = () =>
    console.log(this.LabTestSampleCollectorCollor);

  // request update to server

  // update Names
  public dispatchLabTestNamesUpdate = () => {}; // this.dispatch(action(dispatchLabTestNamesUpdate, Names))
  // update Classification

  // update Finance

  // update pre analytic

  // user change many fields and want to update all
  public dispatchLabTestAllUpdate = () => {}; // this.dispatch(action(dispatchLabTestAllUpdate, LabTestUpdate))

  //dispatches function

  /** update necessary data */
  public getUpdatesDatat = (userId: string) =>
    store.dispatch({
      type: LabTestActions.LAB_TEST_DETAILS_UPDATE,
      payload: {
        query: `mutation{
            LabTestAllUpdate(
                names : {
                  en : "${this.LabTestNameEn}",
                  fr : "${this.LabTestNameFr}"
                }, 
                reference : {
                  CPT : ${this.LabTestReferenceCpt},
                  Mnemonic : "${this.LabTestReferenceMnemonic}"
                  },
                finance : {
                  country : "Morocco",
                  Bcode : ${this.LabTestFinanceBCode}
                },                
                preAnalytics : {
                    sampleType :["${
                      this.LabTestSampleType
                        ? this.LabTestSampleType.join('","')
                        : ""
                    }"],
                    sampleCollectorColor : ["${
                      this.LabTestSampleCollectorCollor
                        ? this.LabTestSampleCollectorCollor.join('","')
                        : ""
                    }"],
                    SampleCollectorQuantity : ${
                      this.LabTestSampleCollectorQuantity
                    },
                    sampleVolumeMin : ${this.LabTestSampleVolumeMin}
                },
                user :{
                    id : "${userId}"
                }
            )}`
      },
      path: "tests"
    });
}
