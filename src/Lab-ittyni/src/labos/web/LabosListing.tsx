import * as React from 'react';
import { Labos } from '../controller/Labos';
import * as List from '../../../../ui-ittyni/src/list/list'

interface ILaboLisitingProps {
  labos?: [LaboWeb]
}

/** instanciate labo class */
const labo = new Labos();

export const LabosLisiting: React.FunctionComponent<ILaboLisitingProps> = ({ labos }) => {

  React.useEffect(() => {
    // Update the document title using the browser API
    window.scroll(0, 0)
  });

  if (labos) return (
    <List.Container>
      {
        labos.map((labo: LaboWeb) =>
          <List.Item key={labo.account ? labo.account.name : '-'}>
            <List.ItemAbbr>
              
            </List.ItemAbbr>
            <List.ItemContent>

              <List.ItemContentTitle>
                {labo.account ? labo.account.name : '-'}
              </List.ItemContentTitle>

              <List.ItemContentDescription>
                {labo.contact ? labo.contact.address.street : '-'}
              </List.ItemContentDescription>

            </List.ItemContent>

            <List.ItemOptions>
              <List.ItemOptionsData>
                {labo.contact ? labo.contact.tele.fix[0] : '-'}
              </List.ItemOptionsData>
              <List.ItemOptionsData>
                {'Fes'}
              </List.ItemOptionsData>
            </List.ItemOptions>
          </List.Item>
        )}
    </List.Container>
  )
  return (labo.LaboListAll() &&
    <div>loading.....</div>
  );
};
