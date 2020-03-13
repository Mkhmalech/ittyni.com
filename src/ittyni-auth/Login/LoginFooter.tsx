import React from '../../../../administration/Dashboard/node_modules/react'
import styled from 'styled-components'

export const LoginFooter = () =>
    <LoginFooterContainer>
        <LoginFooterParagraph>
            <span>Ittyni 1.0.0 </span>
            <span>Health Care Application.</span>
            <span>
                Copyright
                © 2019
                khm@med Inc.
                All rights reserved.
      </span>
            <span>
                khm@med®
      </span>
        </LoginFooterParagraph>
    </LoginFooterContainer>

const LoginFooterContainer = styled.footer`
    text-align: center;
    position: relative;
`
const LoginFooterParagraph = styled.p`
    color: rgba(0, 0, 0, 0.75);
    font-weight: 400;
    font-size: 11px;
    padding: 14px 0;
    text-transform: uppercase;
    margin: 0;
`