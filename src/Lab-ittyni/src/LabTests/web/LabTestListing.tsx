import * as React from 'react';
import * as List from '../../../../ui-ittyni/src'
import {Ico} from '../../../..//react-icons-sc/src/ico' 

import {tube} from '../icon/sample'
import ListComponent from '../../../../ui-ittyni/src/list/listComponent';

export interface ILabTestsListingProps {
}

export function LabTestsListing (props: ILabTestsListingProps) {

  let data = [
    { abbr : "crp",
      title : "crp title",
      description : "crp description",
      options : "crp option",
      price : "crp price"
    },
    { abbr : "crp",
      title : "crp title",
      description : "crp description",
      options : "crp option",
      price : "crp price"
    },
    { abbr : "crp",
      title : "crp title",
      description : "crp description",
      options : "crp option",
      price : "crp price"
    },
    { abbr : "crp",
      title : "crp title",
      description : "crp description",
      options : "crp option",
      price : "crp price"
    },
  ]

  return (
    <>
      <ListComponent listTitle="prix des analyse aux maroc" data={data}/>
    </>
  );
}
