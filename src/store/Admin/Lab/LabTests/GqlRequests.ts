// LabTests Mutations

// LabTest Mutations
export const LabTestUpdateDataMutation = (LabTest : any) => ({
    query : `

        mutation {

            LabTestAllUpdate(

                names : {
                  en : "${LabTest.nameEn}",
                  fr : "${LabTest.nameFr}"
                }, 
                reference : {
                  CPT : ${LabTest.CPT},
                  Mnemonic : "${LabTest.mnemonic}"
                  },
                finance : {
                  country : "Morocco",
                  Bcode : ${LabTest.Bcode}
                },
                
                preAnalytics : {
                    sampleType :["${LabTest.sampleType.join('","')}"],
                    sampleCollectorColor : ["${LabTest.sampleCollectorColor.join('","')}"],
                    SampleCollectorQuantity : ${LabTest.SampleCollectorQuantity},
                    sampleVolumeMin : ${LabTest.sampleVolumeMin}
                },

                user :{
                    id : "${LabTest.userId}"
                }

            )
        }
    `
})
