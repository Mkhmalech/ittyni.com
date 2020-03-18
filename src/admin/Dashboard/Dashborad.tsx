import * as React from 'react';
import { Route, match } from 'react-router';
import { NavLink } from 'react-router-dom';
import {Location} from 'history';

import { TableListing } from '../../../components/Listing/TableList'

interface IDachboardProps {
    match : match;
    location : Location
}

const Dashboard : React.FC<IDachboardProps> = ({match, location}: IDachboardProps) => {

  return (
    <>
        <h3 dangerouslySetInnerHTML={{__html : breadcrump(location.pathname)}} />
        <h1>Dashboard</h1>
        <section>
            her goes dashboard 
            <NavLink to={`${match.path}/submenu1`} > submenu1 </NavLink>
            <NavLink to={`${match.path}/submenu2`} > submenu2 </NavLink>
                
            <Route path={`${match.path}/submenu1`} render={() => {
              const data = [{
                "reference": {
                  "CPT": 84378,
                  "Mnemonic": "GlycoMark",
                  "code": [
                    1
                  ]
                },
                "name": {
                  "fr": "1,5 Anhydroglucitol Quantitative, Serum ou Plasma"
                },
                "finance": [
                  {
                    "Bcode": 70
                  }
                ]
              },
              {
                "reference": {
                  "CPT": 86900,
                  "Mnemonic": "ABORH",
                  "code": [
                    5
                  ]
                },
                "name": {
                  "fr": "Groupage sanguin ABO - RH1(D) - Sang total(GRS)"
                },
                "finance": [
                  {
                    "Bcode": 50
                  }
                ]
              },
              {
                "reference": {
                  "CPT": 84460,
                  "Mnemonic": "SGPT",
                  "code": [
                    65
                  ]
                },
                "name": {
                  "fr": "Alanine aminotransférase - Serum oo Plasma (ALAT - GPT)"
                },
                "finance": [
                  {
                    "Bcode": 50
                  }
                ]
              },
              {
                "reference": {
                  "CPT": 84075,
                  "Mnemonic": "PAL",
                  "code": [
                    84
                  ]
                },
                "name": {
                  "fr": "Phosphatases alcalines - Sérum or Plasma"
                },
                "finance": [
                  {
                    "Bcode": 50
                  }
                ]
              },
              {
                "reference": {
                  "CPT": 82040,
                  "Mnemonic": "ALB",
                  "code": [
                    69
                  ]
                },
                "name": {
                  "fr": "Albumine - Sérum ou Plasma"
                },
                "finance": [
                  {
                    "Bcode": 60
                  }
                ]
              },
              {
                "reference": {
                  "CPT": 82140,
                  "Mnemonic": "AMMON",
                  "code": [
                    128
                  ]
                },
                "name": {
                  "fr": "Ammoniémie - plasma (AMMO)"
                },
                "finance": [
                  {
                    "Bcode": 100
                  }
                ]
              }];

              return(
                <TableListing data={data} />
              )
            }}/>
            <Route exact path={`${match.path}/submenu2`} component={() => <h3>submenu 2</h3>}/>
                   
        </section>
        
    </>
  );
}

function breadcrump(path : string): string{

    let newPath =  path.slice(1)
                   .split('/')
                   .join('<span> >>> </span>');

    return `<i class="fa fa-home" ></i> ${newPath}` ;
}

export default Dashboard;