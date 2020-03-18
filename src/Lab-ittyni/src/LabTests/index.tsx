import * as React from 'react';
import { Switch, Route, match, useRouteMatch, useParams } from 'react-router';
import { labRoutes } from '../routes';

interface ILabTestsProps extends Location{
  match :  match
}

export const LabTests: React.FC<ILabTestsProps> = ({match}) => {
  let labtests = useRouteMatch(`/analyses_mediales/Liste_Prix_tarif_analyses_medicales`);
  return (
    <>
      <h1>Labtests : </h1>
      <div> this page match route </div>
    </>
  );
};
