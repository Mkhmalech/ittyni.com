import * as React from 'react';
import styled from '../theme/styled-components';
import { device } from '../theme';

/**
 * main page wrapper
 */
export const Page = styled('div').attrs({className : "pageWrapper"})`    
    height : 100%;
    display : flex;
    flex-direction : column;
`
/**
 * header wrapper
 */
export const Header = styled('header').attrs({className : "headerWrapper"})`
    position: fixed;
    height: 73px;
    width: 100%;
    z-index: 11;
    border-bottom: 1px solid #d4d4d4;
    display: flex;
    * {
        background-color: ${({theme})=>theme.color.defaultColor};
    }
`

/**
 * Container wrapper
 */
export const Main = styled('main').attrs({className : "containerWrapper"})`
    min-height : ${({theme})=>theme.windowHeight-20-75}px;
    display : flex;
    flex-direction : row;

    padding-top : 150px;

    ${device.mobile`
        flex-direction : column-reverse;
    `}

    ${device.tablet`
        flex-direction : column-reverse;
    `}
`

export const MainContent = styled('div')`
    flex : 3;
    ${device.mobile`
        flex : 1;
    `}
`

export const MainSide = styled('div')`
    flex : 1;
    ${device.mobile`
        flex : 1;
    `}
`



/**
 * Footer wrapper
 */
export const Footer = styled('footer').attrs({className : "footerWrapper"})`
    min-height : 20px;
    background : ${({theme})=>theme.color.defaultColor};
    text-align : center;
    border-top: 1px solid #d4d4d4;
`