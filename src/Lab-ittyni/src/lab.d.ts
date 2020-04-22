/**
 *  Lab typings file
 * created by @khmamed
 * for @ittyni @backEnd
 * at 02/17/2020
 *
 */
// Lab ------> routes

interface RouteData {
  path: string;
  title: string;
  description: string;
  keywords: string;
  component: React.FC<P>;
}

interface LabTestsRoutes {
  LabTestsPrice: {
    Morocco: RouteData;
  };
  LabTestDetails: RouteData;
}

interface LabLaboRoutes {
  LabLabos: {
    Morroco: RouteData;
  };
  LabLaboDetails: RouteData;
}
interface LabRoutes {
  LabTests: LabTestsRoutes;
  Labo?: LabLaboRoutes;
  Equipements?: RouteData;
}
// Lab -----> Tests typing file <-----
/**
 * @nameoftes
 */
type LabTestNameFr = string;
type LabTestNameEn = string;

/**
 * @labtesReferance
 */
type LabTestReferenceCode = Number;
type LabTestReferenceMnemonic = string;
type LabTestReferenceCPT = Number;

/**
 * @labtestfinance
 */
type LabTestFinanceCountry = string;
type LabTestFinanceBcode = number;

/**
 * @labtestclassification
 */
type LabTestClassificationPanels = string;
type LabTestClassificationDepartement = string;
type LabTestClassificationMolecule = string;

/**
 * @labtestspicement
 */
type LabTestSpecimenNature = string;
type LabTestSpecimenTubeColor = string;
type LabTestSpecimenAnticoagulant = string;
type LabTestSpecimenNumberoftube = number;
type LabTestSpecimenVolumeMin = number;
type LabTestSpecimenStabilityTime = number;
type LabTestSpecimenStabilityTemperature = number;

interface LabTestReference {
  code: LabTestReferencecode;
  Mnemonic: LabTestReferenceMnemonic;
  CPT: LabTestReferenceCPT;
}

interface LabTestNames {
  en: LabTestNameEn;
  fr?: LabTestNameFr;
}

interface LabTestFinance {
  country: LabTestFinancecountry;
  Bcode: LabTestFinanceBcode;
}

interface LabTestClassification {
  Panels?: LabTestClassificationPanels;
  Departement: LabTestClassificationDepartement;
  Molecule: LabTestClassificationMolecule;
}

interface LabTestSpecimen {
  nature?: LabTestSpecimenNature[];
  tubeColor?: LabTestSpecimenTubeColor[];
  anticoagulant?: LabTestSpecimenAnticoagulant[];
  numberoftube?: LabTestSpecimenNumberoftube;
  volumemin?: LabTestSpecimenVolumeMin;
  stability?: {
    time: LabTestSpecimenStabilityTime;
    temperature: LabTestSpecimenStabilityTemperature;
  };
}

interface LabTest {
  reference?: LabTestReference;
  name?: LabTestNames;
  finance?: LabTestFinance[];
  classification?: LabTestClassification;
  specimen?: LabTestSpecimen;
}

interface LabTest extends LabTest {
  updates?: LabTest[];
}

// Lab -----> Labos typing file <-----

type LabLaboAccountName = string;
type LabLaboAccountCode = number;
type LabLaboContactTeleFix = string[];
type LabLaboContactTeleFax = string[];
type LabLaboContactAddressRegion = string;
type LabLaboContactAddressProvince = string;
type LabLaboContactAddressCity = string;
type LabLaboContactAddressCommune = string;
type LabLaboContactAddressStreet = string;

interface LabLaboAccount {
  name: LabLaboAccountName;
  code: LabLaboAccountCode;
}
interface LabLaboContactTele {
  fix: LabLaboContactTeleFix;
  fax: LabLaboContactTeleFax;
}
interface LabLaboContactAddress {
  region: LabLaboContactAddressRegion;
  province: LabLaboContactAddressProvince;
  city: LabLaboContactAddressCity;
  commune: LabLaboContactAddressCommune;
  street: LabLaboContactAddressStreet;
}
interface LabLaboContact {
  tele: LabLaboContactTele;
  address: LabLaboContactAddress;
}
interface LabLaboCatalogListTest {
  userID?: string;
  testReported: number;
  testPrice?: number;
  testReferred?: boolean;
  date?: Date;
}
interface LabLaboCatalogList {
  testID: string;
  update?: LabLaboCatalogListTest[];
}
interface LabLaboCatalog {
  list: LabLaboCatalogList[];
}

interface LabLaboOrder {}

interface LabLaboReferral {}

interface LabLaboAffiliate {}

interface LabLaboStaff {}

interface LaboWeb {
  account?    : LabLaboAccount;
  contact?    : LabLaboContact;
}
interface Labo {
  account?    : LabLaboAccount;
  contact?    : LabLaboContact;
  staff?      : LabLaboStaff;
  catalog?    : LabLaboCatalog;
  order?      : LabLaboOrder;
  referral?   : LabLaboReferral;
  affiliate?  : LabLaboAffiliate;
}

/****************************************
 *********   Lab States  ************
 ****************************************/
type LabTestID = String
type LabTestTitle = String
type LabTestNameEn = String
type LabTestNameFr = String
type LabTestDepartement = LabDepartement[]
type LabTestPanelReferenceMnemonic = string
type LabTestPanels = String[]
type LabTestMoleculeFamily = String
type LabTestReferenceCode = Number
type LabTestReferenceCpt = Number
type LabTestReferenceMnemonic = String
type LabTestFinanceBCode = String
type LabTestFinanceCountry = String


/***************************
 *  Laboratory Sample
 ***************************/
type SampleType = "Plasma" | "Serum" | "Sang Total" | "Urine"


type SampleCollectorColor = "Rouge" | "Vert" | "Gris" | "Violet" | "Bleu" | "Noir"

type SampleCollectAnticoagulant = 
  "EDTA" | "Sec" | "Sodium et Oxalate de Potassium" | 
  "Héparine de Lithium" | "Citrate de Sodium" ;

interface SampleStability {

  TempCelsius : Number,

  TimeDays : Number

}

interface LabTestSampleCollector {
  
  Color : SampleCollectorColor

  Anticoagulant : SampleCollectAnticoagulant


}

interface LabTestSample {
  
  Collect : LabTestSampleCollector

  TransportTempCelsius : Number

  Stability : SampleStability
}


/**
 * labTestState {
 *  @labtests
 * }
 */
interface LabTestState {
  labtests?: LabTest[];
  labtestsAll?: LabTest[];
  labTestFrDetails? : LabTest
  labTestEnDetails? : LabTest
}

interface LabLaboState {
  listAll? : [Labo] 
  laboDetails? : Labo
}

interface LabEquipementState {}

interface LabStaffState {}

interface LabState {
  test?: LabTestState;
  labo?: LabLaboState;
  equipement?: LabEquipementState;
  staff?: LabStaffState;
}
