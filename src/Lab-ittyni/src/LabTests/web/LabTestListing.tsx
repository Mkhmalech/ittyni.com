import * as React from 'react';
import ListComponent from '../../../../ui-ittyni/src/list/listComponent';
import { Dispatch, Action } from 'redux';
import { connect } from 'react-redux';
import { Labtests } from '../controller/labtests';
import { IttyniState } from '../../../../store/index';

export interface ILabTestsListingProps extends LabTestState{
  dispatch : Dispatch<Action>
}

const LabTestsListing : React.FC<ILabTestsListingProps> =  ({labtests}) => {

  const labtestClasse = new Labtests("token")

  let data : ListData[] = [];

  if(labtests){
    labtests.length > 0 ?  (
      labtests.map((labtest) => {
        data.push({
          abbr : labtest.reference ? labtest.reference.Mnemonic : '-',
          title : labtest.name ? labtest.name.fr ? labtest.name.fr : '-'  : '-',
          description : 'this is a description',
          options : '',
          bcode : labtest.finance ? (labtest.finance[0] ? labtest.finance[0].Bcode : 0) : 0,
          price : labtest.finance ? (labtest.finance[0] ? Math.floor(labtest.finance[0].Bcode*1.34) : 0) : 0,
          specimen : {
            ...labtest.specimen
          }
        })
      })
    ) : labtestClasse.labTestsFetching()
  } 

  return (
    <>
      <ListComponent listTitle="prix des analyse aux maroc" data={data} />
    </>
  );
}

const mapStateToProps = ({labState : { test }} : IttyniState) => ({

  /**
   * List of frensh Lab procedure 
   */
  labtests : test ? test.labtests : [],

  /**
   * 
   */


})

export default connect(mapStateToProps)(LabTestsListing)