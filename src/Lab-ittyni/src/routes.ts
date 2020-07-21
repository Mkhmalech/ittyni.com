import * as Labtest from "./labTests/index";
import LabTestListAll from "./labTests/admin/LabTestListAll";
import LaboListAll from "./labos/admin/LaboListAll";
import { LabTestEdit } from "./labTests/admin/LabTestEdit";
import { LaboEdit } from "./labos/admin/LaboEdit";

import LabTestsListing from "./labTests/web/LabTestListing";
import { LabTestSearch, LaboSearch } from "../index";
import { LabTestDetail } from "./labTests/web/LabTestDetail";

// labo component
import {LabosLisiting} from './labos/web/LabosListing'
import {LaboDetails} from './labos/web/LaboDetails'

export const labRoutes = {
  LabTests: {
    labTests: {
      path: "/website/:category/Listes-prix-analyses-medicales/maroc",
      component: LabTestsListing,
      search: LabTestSearch
    },
    labTestDetail: {
      path: "/website/:category/:test",
      component: LabTestDetail
    },
    admin: {
      link: "/admin/:username/lab/*",
      dock: "",
      sidebar: Labtest.Sidebar,
      LabtestListAll: {
        path: "/admin/:username/lab/labtests",
        title: "LabTests",
        component: LabTestListAll
      },
      LabTestEdit: {
        path: "/admin/:username/lab/labtests/:test",
        title: "Modification de procedure",
        component: LabTestEdit
      }
    }
  },
  Labo: {
    Labos: {
      path: "/website/laboratoires-d-analyses-mediales/",
      title: "",
      description: "",
      search: LaboSearch,
      component: LabosLisiting
    },
    LaboDetails: {
      path: "/website/:category/:labo",
      title: "",
      description: "",
      keywords: "",
      component: LaboDetails
    },
    admin: {
      link: "/admin/:username/lab/labo/*",
      dock: "",
      LaboListAll: {
        path: "/admin/:username/lab/labos",
        title: "list de tout les laboratoire",
        component: LaboListAll
      },
      LaboEdit: {
        path: "/admin/:username/lab/labo/:labo",
        title: "Modifier laboratoire",
        component: LaboEdit
      }
    }
  }
};
