import  LabTestsListing  from './lab-ittyni/src/labTests/web/LabTestListing'
import  {LabTestSearch}  from './lab-ittyni/index'
import { LabTestDetail } from './lab-ittyni/src/labTests/web/LabTestDetail';
import  Auth  from './authentification-redux-lib/src/web'
export const routes = {
    admin : {
        path : '/admin/:user/',
    },
    website : {
        path : '/website',
        labTests : {
            path : '/website/analyses-medicales/Listes-prix-analyses-medicales/maroc',
            component : LabTestsListing,
            search : LabTestSearch
        },
        labTestDetail : {
            path : '/website/analyses-medicales/:test',
            component : LabTestDetail
        }
    },
    auth : {
        path : '/website/auth/*',
        component : Auth
    },

    lab : {
        
    }

}