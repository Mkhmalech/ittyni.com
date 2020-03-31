import * as Labtest from "./labTests/index";
import LabTestListAll from "./labTests/admin/LabTestListAll";
import { LaboListAll } from './labos/admin/LaboListAll';
import { LabTestEdit } from './labTests/admin/LabTestEdit';

export const labRoutes  = {
    
    LabTests : {
        LabTestsPrice : {
            Morocco : {
                path : '/analyses-mediales/liste-prix-tarif-analyses-medicales/maroc',
                title : "",
                description : "",
                keywords : "" ,
                component : ''
            }
        },
        LabTestDetails : {
            path : '/analyses-mediales/:test',
            title : "",
            description : "",
            keywords : "" ,
            component : ''
        },
        admin : {
            link : '/admin/:username/lab/*',
            dock : '',
            sidebar : Labtest.Sidebar,
            LabtestListAll : {
                path : '/admin/:username/lab/labtests',
                title : 'LabTests',
                component : LabTestListAll
            },
            LabTestEdit : {
                path : '/admin/:username/lab/labtests/:test',
                title : 'Modification de procedure',
                component : LabTestEdit
            }
        }
    },
    Labo : {
        LabLabos : {
            Morroco : {
                path : '/laboratoire-analyses-mediales/maroc/:city',
                title : "",
                description : "",
                keywords : "" ,
                component : ''
            }
        },
        LabLaboDetails : {
            path : '/laboratoire-analyses-mediales/maroc/:city/:labo',
            title : "",
            description : "",
            keywords : "" ,
            component : ''
        },
        admin : {
            link : '/admin/:username/lab/*',
            dock : '',
            LaboListAll : {
                path : '/admin/:username/lab/laboslistall',
                title : 'list de tout les laboratoire',
                component : LaboListAll
            }
        }
    } 
   
}