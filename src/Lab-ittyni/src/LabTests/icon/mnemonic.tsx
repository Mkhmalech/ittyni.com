import * as React from 'react'
import styled from "styled-components";

export const MnemonicIcon = styled((props: {
    className?: string, checked: Boolean
}) =>
    (
        <svg
            className={props.className}
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
        >
            <circle cx="40" cy="45" r="35" stroke="#888888" strokeWidth="2">

            </circle>
        </svg>
    ))
    .attrs({})`

    height : 90px;
    width  : 90px;

    fill : ${props => (props.checked ? "salmon" : "papayawhip")};
        
    &:focus {
        stroke: 0 0 0 3px pink;
    }
`