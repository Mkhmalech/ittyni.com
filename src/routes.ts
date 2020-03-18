import { labRoutes } from './Lab-ittyni/src/routes';
import { LabTestsListing } from './Lab-ittyni/src/LabTests/web/LabTestListing'
export const routes = {
    admin : {
        path : '/admin/:user/*',
    },
    website : {
        path : '/website',
        labTests : {
            path : '/website/analyses_medicales/Listes_prix_analyses_medicales/maroc',
            component : LabTestsListing,
            title : 'Listes prix analyses medicales',
            description : 'prix et tarif des analyses medicales et des tests biologiques au maroc',
            keywords : 'prix, tarif, analyses, medicales, test, biologiques'
        }
    },
    auth : {
        path : '/auth'
    }
}