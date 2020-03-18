import * as React from 'react';
import * as Wrapper from './wrappers'
import { GlobalStyle } from '../theme';
import Header from './header'
import { Link, Route, Redirect } from 'react-router-dom';
import styled from '../theme/styled-components';


import { routes } from '../routes';

interface IHomeProps {
}

export const Home: React.FunctionComponent<IHomeProps> = (props) => {
  return (
    <>
      <GlobalStyle />

      <Wrapper.Page>
        <Wrapper.Header >
          <Header>

            <HomeLink to="/website"> Home </HomeLink>

            <LoginLink to="/admin/user/">
              <LoginLinkIcon>
                {/* <LoginIcon /> */}
              </LoginLinkIcon>
              <LoginLinkText>Login</LoginLinkText>
            </LoginLink>

          </Header>
        </Wrapper.Header>
        <Wrapper.Main>

          <Wrapper.MainContent>

            <Route path={routes.website.labTests.path} component={routes.website.labTests.component}/>
            <Redirect to={routes.website.labTests.path} />

          </Wrapper.MainContent>
          <Wrapper.MainSide>
            Menu
          </Wrapper.MainSide>

        </Wrapper.Main>       

        <Wrapper.Footer>
          All Copyrights reserved for iTTyni(c) v1.0.0Beta
        </Wrapper.Footer>
      </Wrapper.Page>
    </>
  );
};

const HomeLink = styled(Link)`
  text-align: right;
  flex: 1 0;
  padding: 5px 0 0 0;
  text-decoration: none;
`

const LoginLink = styled(Link)`
  flex: 1 0;
  display: flex;
  padding: 1px 0 0 20px;
  text-decoration: none;
`

const LoginLinkText = styled('div')`
  padding: 5px 0 0 5px;
`
const LoginLinkIcon = styled('div')`
  border-left: 1px solid;
  padding-left : 10px;
  margin-bottom: 20px;
`

const LoginIcon = styled((props: { className?: string }) => (
  <svg
    className={props.className}
    version="1.1"
    viewBox="0 0 475.2 475.2"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M256,0c-76.544,0.094-138.573,62.122-138.667,138.667V224c0,5.891,4.776,10.667,10.667,10.667h42.667
	         c5.891,0,10.667-4.776,10.667-10.667v-85.333C181.333,97.429,214.763,64,256,64s74.667,33.429,74.667,74.667V224
	         c0,5.891,4.776,10.667,10.667,10.667H384c5.891,0,10.667-4.776,10.667-10.667v-85.333C394.573,62.122,332.544,0.094,256,0z" className="arm"/>
    <path d="M128,213.333h256c29.455,0,53.333,23.878,53.333,53.333v192C437.333,488.122,413.455,512,384,512H128
	         c-29.455,0-53.333-23.878-53.333-53.333v-192C74.667,237.211,98.545,213.333,128,213.333z" className="body"/>
    <path d="M309.333,330.667c0.124-29.455-23.653-53.434-53.108-53.558c-29.455-0.124-53.434,23.653-53.558,53.108c-0.086,20.36,11.427,38.992,
         29.674,48.023l-8.235,57.6c-0.825,5.833,3.235,11.23,9.068,12.055c0.494,0.07,0.993,0.105,1.492,0.105h42.667c5.891,0.06,10.715-
         4.667,10.774-10.558c0.005-0.543-0.03-1.086-0.108-1.623l-8.235-57.6C297.788,369.199,309.216,350.82,309.333,330.667z" className="key"/>
  </svg>
))
  .attrs({ className: 'login-icon' })`
  padding : 0 5px;
  width : 15px;
  height : 25px;

  path {
    fill : red
  }

  :hover {
    path {
      fill : ${({ theme }) => theme.color.thirdColor}
    }
  }

  .key {
    fill: yellow
  }
`