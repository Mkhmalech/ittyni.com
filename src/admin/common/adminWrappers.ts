import styled, { createGlobalStyle, css } from '../../theme/styled-components';
import { device } from '../../theme';

const headerHeight : number = 25;
const eleModuleWidth : number = 50;
const headeeSideBr : string = '#eaeaea';
const headeeSideColor : string = 'rgb(0, 0, 0)';
const mainbg : string = '#f3f3f3';
const hideElement = css`display : none`;
const showElement = css`display : block`;

/**
 * globals
 */
export const Globals = createGlobalStyle`
    body {
        margin : 0;
        padding : 0;
        background : ${({theme})=> theme.color.primaryColor};
        * {
            color : ${headeeSideColor};            
        }
    }
`

/**
 * wrapper parent
 */
export const admin = styled('div').attrs({})`
    /* border : 2px solid gray; */
    display : flex;
    flex-direction : column;

`
// admin header styles v1.0.0
/**
 * header wrap
 */
export const header = styled('header').attrs({})`
    border: 2px solid ${headeeSideBr};
    position: fixed;
    top: 0;
    min-height : ${headerHeight}px;
    margin: 0;
    flex-basis: 100%;
    width: 99.6%;
    background : ${headeeSideBr};
`

//===============> End of header styles
// -------------------------------------------
// admin container styles v1.0.0
//-------------------------------------------
export const container = styled('div').attrs({})`
    display : flex;
    margin-top : ${headerHeight + 5 }px;
`

//============> End of container styles

// -------------------------------------------
// admin dock styles v1.0.0
//-------------------------------------------

/**
 * sidebar wrap styles
 */
export const dock = styled('div').attrs({})`
    border : 2px solid ${headeeSideBr};
    min-width : ${eleModuleWidth}px; 
    min-height : 95.8%;
    position: absolute;
    top: ${headerHeight + 1 }px;
    left: 0;
    margin-left: 0;
    margin-top: 0;
    display: flex;
    flex-shrink: 0;
    flex-direction: column;
    background : ${headeeSideBr};

    ${device.mobile`
        display : none;
    `}

    ${device.tablet`
        min-width : 50px; 
    `}
`

//============> End of dock styles

// -------------------------------------------
// admin Main styles v1.0.0
//-------------------------------------------
/**
 * main wrap
 */
export const main = styled('main')<{closed : boolean}>`
    /* border : 2px solid gray; */
    margin-left : ${eleModuleWidth+9}px;
    flex-basis : ${screen.width - eleModuleWidth }px;
    min-height : ${window.innerHeight - headerHeight - 6}px;
    background : ${mainbg}; 

    display : flex;

    aside {
        display : ${({closed}) => closed? 'none' : 'block'}
    }

    &>div {
        flex-basis : ${({closed}) => closed? (screen.width - eleModuleWidth)+'px' : '80%'} !important;
    }

    ${device.mobile`
        margin : 0;
        flex-basis : ${screen.width}px;
    `}

    ${device.tablet`
        margin-left : 55px;
        flex-basis : ${screen.width}px;
    `}
`
// -------------------------------------------
// admin sidebar styles v1.0.0
//-------------------------------------------

/**
 * admin sidebar wrap
 */
export const sidebar = styled('aside')`
    flex-basis : 20%;

    ${device.mobile`
        display : none;
    `}

    ${device.tablet`
        display : none;
    `}
`
/**
 * sidebar header
 */

/**
 * sidebar footer
 */


//============> End of sidebar styles

// admin content styles v1.0.0

/**
 * content wrap
 */
export const content = styled('div').attrs({})`
    /* border : 2px solid gray; */
    flex-basis : 80%;
    display: flex;
    flex-direction: column;
    
    ${device.mobile`
        flex-basis :${screen.width}px;
        
    `}

    ${device.tablet`
        flex-basis : ${screen.width - eleModuleWidth }px;
        
    `}
`

export const tabModule = styled('div').attrs({})`
    border: 2px solid ${headeeSideBr};
    background: ${headeeSideBr};
    display: flex;
    flex-shrink: 0;
    height: 38px;
    overflow: hidden;
`

export const page = styled('div')`
    flex-grow: 1;
    background : #ffffff;
    padding-left : 20px;
    
    ${device.mobile`
        padding-left : 0;
    `}

    ${device.tablet`
        padding-left : 5px;
    `}
`