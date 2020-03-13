import * as React from '../../../../administration/Dashboard/node_modules/react';
import { LoginFormContainer, LoginLinkButton } from '../Login';
import { Link } from '../../../../administration/Dashboard/node_modules/react-router-dom';

import { Alert } from '../../../../components/Alerts/Alerts'

export interface ResetPassFormProps {
}

export function ResetPassForm(props: ResetPassFormProps) {
  return (
    <div>
      <LoginFormContainer>

        <Alert>
          <p>L'Enrgistrement a l'Application iTTyni est suspendue actuellement.</p>
          <p>Merci de revenir plus tard.</p>
        </Alert>

        <LoginLinkButton><Link to="/Auth/Login" >Vous Avez Deja un Compte</Link></LoginLinkButton>

        <LoginLinkButton><Link to="/Auth/Signup" >Creer Un Compte?</Link></LoginLinkButton>
        
      </LoginFormContainer>
    </div>
  );
}
