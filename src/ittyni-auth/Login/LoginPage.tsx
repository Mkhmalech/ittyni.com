import * as React from '../../../../administration/Dashboard/node_modules/react';
import { UserField, LoginLabel,  LoginInput, Fields, LoginButton, LoginLinkButton } from '../Login';
import { LoginContext } from '../../../../context'
import { Link, Redirect } from '../../../../administration/Dashboard/node_modules/react-router-dom';
import { IttyniState } from '../../../../store';
import { connect } from '../../../../administration/Lab/LabTest/node_modules/react-redux';
import styled from '../../../../theme/styled-components';
import { LoginPageState } from '../../../../store/Auth/Login/types';

interface PropsFromContext {

}
interface PropsFromConnect {
    isAuth : Boolean
    Login : LoginPageState
}

type LoginPageProps = PropsFromContext & PropsFromConnect

const LoginPage: React.FunctionComponent<LoginPageProps> = ({Login}) => {

    const {isAuth, Email, Password} = Login

    // console.log(`${Email} and ${Password}`)
    return (
        <> 
            <LoginContext>
                {({fetchUser, getEmail, getPassword}) => 
                    !isAuth ?
                    <LoginFormContainer>
                        <UserField>
                            <LoginLabel htmlFor="Email">
                                <LoginSvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25" >
                                    <path 
                                        d="M 15.16 12.92 a 8.51 8.51 0 0 1 4.54 3.19 a 9.09 9.09 0 0 1 1.81 5.4 v 1.49 a 0.48 0.48 0 0 1 -0.54 
                                            0.54 c -0.32 0 -0.49 -0.18 -0.49 -0.54 v -1.49 a 8 8 0 0 0 -8 -8 a 7.72 7.72 0 0 0 -5.67 2.34 a 7.75
                                            7.75 0 0 0 -2.34 5.67 v 1.48 c 0 0.36 -0.17 0.54 -0.49 0.54 s -0.49 -0.18 -0.49 -0.54 v -1.49 a 9 9 0 0 1 6.35 -8.64 
                                            a 6 6 0 0 1 -2.44 -2.18 a 5.75 5.75 0 0 1 -0.93 -3.19 a 5.78 5.78 0 0 1 1.76 -4.25 a 5.8 5.8 0 0 1 4.25 -1.76 a 5.78 
                                            5.78 0 0 1 4.24 1.76 a 5.74 5.74 0 0 1 1.76 4.25 a 5.75 5.75 0 0 1 -0.93 3.19 a 5.9 5.9 0 0 1 -2.44 2.18 Z m -6.16 
                                            -1.92 a 4.8 4.8 0 0 0 3.52 1.47 a 4.84 4.84 0 0 0 3.48 -1.47 a 4.78 4.78 0 0 0 1.5 -3.5 a 4.85 4.85 0 0 0 -1.5 -3.57 
                                            a 4.83 4.83 0 0 0 -3.56 -1.46 a 4.79 4.79 0 0 0 -3.44 1.46 a 4.85 4.85 0 0 0 -1.5 3.57 a 4.78 4.78 0 0 0 1.5 3.5 Z" 
                                        />
                                </LoginSvg>
                            </LoginLabel>
                            <LoginInput 
                                type="text" 
                                placeholder="Email" 
                                onChange={e=> getEmail(e.target.value)} />
                        </UserField>
                        <Fields>
                            <LoginLabel htmlFor="txtPassword">
                                <LoginSvg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25" > 
                                    <path
                                        d="M20.58 10.45a1.4 1.4 0 0 1 .44 1v12a1.5 1.5 0 0 1-1.51 1.55h-14a1.5 1.5 0 0 1
                                            -1.51-1.51v-12a1.4 1.4 0 0 1 .44-1 1.46 1.46 0 0 1 1.05-.49h1.51v-4.48a5.4 5.4 
                                            0 0 1 1.59-3.91 5.28 5.28 0 0 1 3.89-1.61 5.33 5.33 0 0 1 3.9 1.61 5.31 5.31 0 0 
                                            1 1.62 3.91v4.48h1.52a1.46 1.46 0 0 1 1.06.45zm-.58 1a.43.43 0 0 0-.49-.48h-14a.43.43 
                                            0 0 0-.49.48v12a.43.43 0 0 0 .49.48h14a.43.43 0 0 0 .49-.48zm-12-1.45h9v-4.48a4.35 4.35
                                            0 0 0-1.35-3.2 4.33 4.33 0 0 0-3.17-1.32 4.28 4.28 0 0 0-3.18 1.32 4.4 4.4 0 0 0-1.3 3.2zM12.5 
                                            20.5a.5.5 0 0 1-.5-.5v-4a.5.5 0 0 1 1 0v4a.5.5 0 0 1-.5.5z" 
                                    />
                                </LoginSvg>
                            </LoginLabel>
                            <LoginInput  
                               type="password" 
                               placeholder="Password"
                               onChange={e=> getPassword(e.target.value)}
                            />
                        </Fields>
                        <LoginButton 
                            type="submit" 
                            onClick={e=>fetchUser({email : Email, password : Password})}
                        >
                            <span >Log in</span>
                        </LoginButton>
                        <LoginLinkButton><Link to="/Auth/Signup" >Creer Un Compte</Link></LoginLinkButton>
                        <LoginLinkButton><Link to="/Auth/ResetPassword" >J'Arrive Pas Acceder A Mon Compte?</Link></LoginLinkButton>
                    </LoginFormContainer>
                    :
                    <Redirect to="/" />
                }
            </LoginContext>
        </>
    );
};

const mapStateToProps = ({AuthStates} : IttyniState) =>({
    isAuth : AuthStates.Login.isAuth,
    Login : AuthStates.Login

})

export const LoginForm =  connect(mapStateToProps)(LoginPage);


// styles
export const LoginFormContainer = styled.div`
    flex: 1;
    width: 100%;
    max-width: 480px;
    margin: 0 auto;
    text-align: center;
    position: relative;
`

export const LoginSvg = styled.svg`
    height: 100%;
    display: inline-block;
    width: 100%;
`