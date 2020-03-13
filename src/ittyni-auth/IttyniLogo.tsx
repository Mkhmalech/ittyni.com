import React from '../../../administration/Dashboard/node_modules/react'
import styled from '../../../theme/styled-components'
import { animationFade } from './Login'

export const Logo = () =>
    <LoginLogoContainer className="logo-container">
        <LoginLogoText>
            I<span>TT</span>yNI
        </LoginLogoText>
    </LoginLogoContainer>


//==== styles
export const LoginLogoContainer = styled.div`
    width: 160px;
    margin: 0 auto;
    padding: 44px 0 21px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex: 1 0 auto;
`

export const LoginLogoText = styled.div`
    font-size : 51px;
    animation : ${animationFade} 2s ease-in-out;

    span{
        color : red;
        font-weight : bold;
    }
`