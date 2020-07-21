import * as React from 'react';
import { Labos } from '../controller/Labos';
import * as List from '../../../../ui-ittyni/src/list/list'
import { Link } from 'react-router-dom';
import { TestLink } from '../../../../ui-ittyni/src/links/Links';
import Helmet from 'react-helmet';

interface ILaboLisitingProps {
  labos?: [LaboWeb]
}

/** instanciate labo class */
const labo = new Labos();

export const LabosLisiting: React.FunctionComponent<ILaboLisitingProps> = ({ labos }) => {

  if (labos) return (
    <>
    <Helmet>
      <meta name="description" content="Listes des laboratoires medicales au maroc" />
      <meta name="keywords" content="Liste laboratoires medicales maroc ville fes address tele fax" />
      <title>Listes des laboratoires medicales au maroc</title>
    </Helmet>
    <List.Container>
      <h1>Listes des laboratoires medicales au maroc</h1>
      {
        labos.map((labo: LaboWeb) =>
          <List.Item key={labo.account ? labo.account.name : '-'}>
            <List.ItemAbbr>
              
            </List.ItemAbbr>
            <List.ItemContent>

              <List.ItemContentTitle>
                <h2>
                <TestLink to={`/website/laboratoire-d-analyses-medicales/${labo.account ? labo.account.name : '-'}`}>
                  {labo.account ? labo.account.name : '-'}
                </TestLink>
                </h2>
              </List.ItemContentTitle>

              <List.ItemContentDescription>
                <h3>
                {labo.contact ? labo.contact.address.street : '-'} , <span>Fes</span>
                </h3>
              </List.ItemContentDescription>

            </List.ItemContent>

            <List.ItemOptions>
              <List.ItemOptionsData>
                <h3>
                {labo.contact ? labo.contact.tele.fix[0] : '-'}
                </h3>
              </List.ItemOptionsData>
            </List.ItemOptions>
          </List.Item>
        )}
    </List.Container>
    </>
  )
  return (labo.LaboListAll() &&
    <div>loading.....</div>
  );
};
