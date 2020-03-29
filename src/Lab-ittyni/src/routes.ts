import * as Labtest from "./labTests/index";

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
            link : '/admin/:user/lab/*',
            dock : '',
            sidebar : Labtest.Sidebar,
            LabtestListAll : {
                path : '/admin/:user/lab/labtests',
                title : 'LabTests',
                component : Labtest.LabTestListAll
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
            dock : '',
            sidebar : [
                {
                    link : '',
                    title : '',
                    component : ''
                }
            ]
        }
    } 
   
}