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
    LabLabos : {
        Morroco : RouteData
    },
    LabLaboDetails : RouteData
}
interface LabRoutes {
  LabTests: LabTestsRoutes;
  Labo?: LabLaboRoutes;
  Equipements?: RouteData;
}
// Lab -----> Tests typing file <-----

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

interface ILabo {
  account: LabLaboAccount;
  contact: LabLaboContact;
  staff: LabLaboStaff;
  catalog: LabLaboCatalog;
  order: LabLaboOrder;
  referral: LabLaboReferral;
  affiliate: LabLaboAffiliate;
}

//--- Lab --------> LabTest typing

interface Reference {
  code: Number;
  Mnemonic: String;
  CPT: Number;
}

interface Names {
  en: String;
  fr?: String;
}

interface Finance {
  country: String;
  Bcode: Number;
}

interface Classification {
  Panels?: String;
  LabDepartement: String;
  Molecule: String;
}

interface Specimen {
  nature?: String[];
  tubeColor?: String[];
  anticoagulant?: String[];
  numberoftube?: Number;
  volumemin?: Number;
  stability?: {
    time: Number;
    temperature: Number;
  };
}

interface Method {}

interface LabTest {
  name: Names;
  reference: Reference;
  finance: Finance;
  classification: Classification;
  specimen: Specimen;
  methode: Method;
}
