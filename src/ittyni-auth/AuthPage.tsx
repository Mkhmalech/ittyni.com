import * as React from '../../../administration/Dashboard/node_modules/react';
import { LoginForm, LoginGlobalStyle, animationFadeSlide, LoginFooter } from './Login';
import { Route, Redirect, Switch, match } from '../../../administration/Dashboard/node_modules/react-router';
import styled from '../../../theme/styled-components';
import { Logo } from '.';
import {SignupForm} from './Signup'
import {ResetPassForm} from './ResetPass'


interface AuthPageProps {
  match : match
}

const AuthPage: React.FC<AuthPageProps> = ({match} : AuthPageProps) => {

  return (
    <>
      <LoginGlobalStyle />

      <LoginMain>
        <Logo />
        <LoginContentContainer>
        <Switch>

          <Route path={`${match.path}/Login`} component={LoginForm} />

          <Route path={`${match.path}/Signup`} component={SignupForm} />

          <Route path={`${match.path}/ResetPassword`} component={ResetPassForm} /> 

          <Redirect to={`${match.path}/Login`} />

          </Switch>

        </LoginContentContainer>
        <LoginFooter />
      </LoginMain>

    </>
  )
};

// styles

const LoginContentContainer = styled.div`
    flex-wrap: nowrap;
    flex-grow: 1;
    margin-top: 44px;
    animation: ${animationFadeSlide} .4s ease-out both .5s;
    flex-direction: column;
    display: flex;
`
const LoginMain = styled.main`
    
`



export default AuthPage;
