import { createGlobalStyle } from "../../../../theme/styled-components";

export const LoginGlobalStyle = createGlobalStyle`
    body { 
        background-repeat: no-repeat;
        background-color: #e0e0e0;
        background-image: linear-gradient(-25deg,#ffffff 0%,#e0e0e0 30%);
        background-attachment: fixed;
        -webkit-tap-highlight-color: transparent;
        font: 16px/1.5 'OpenSans','Open Sans',sans-serif;
        font-style: normal;
        color: #fff;

        text-align: center;

        padding: 0 14px;
        margin: 0;
    }

    *, :after, :before {
        box-sizing: border-box;
    }

    html, body, main {
        height: 100%;
        padding: 0;
        margin: 0;

        & > #root > div {
            background : none !important;
            border-bottom : none !important;
        }
    }

    header > a {
        transform : translateX(100px);
        color : #000;
        font-weight : bold;
    }

    .searchBox, .ittyniLogo {
        display : none
    }

`