import * as React from 'react';
import ListComponent from '../../../../ui-ittyni/src/list/listComponent';
import { Dispatch, Action } from 'redux';
import { connect } from 'react-redux';
import { Labtests } from '../controller/labtests';
import { IttyniState } from '../../../../store/index';
import Helmet from 'react-helmet';

export interface ILabTestsListingProps extends LabTestState{
  dispatch : Dispatch<Action>
}

const LabTestsListing : React.FC<ILabTestsListingProps> =  ({labtests}) => {

  const labtestClasse = new Labtests()

  let data : ListData[] = [];

  if(labtests === undefined || labtests.length <= 0){ labtestClasse.labTestsFetching() } 
  else {
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
  }

  return (
    <>
      <Helmet>
        <title>prix des analyse aux maroc</title>
        <meta name="description" content="prix des analyses medicales aux maroc list " />
        <meta name="keywords" content="" />
      </Helmet>
      <ListComponent listTitle="prix des analyse aux maroc" data={data} />
    </>
  );
}

const mapStateToProps = ({labState : { test }} : IttyniState) => ({

  /**
   * List of frensh Lab procedure 
   */
  labtests : test ? test.labtests : undefined,

  /**
   * 
   */


})

export default connect(mapStateToProps)(LabTestsListing)