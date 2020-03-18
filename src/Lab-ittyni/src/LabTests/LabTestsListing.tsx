import * as React from 'react';
import { createGlobalStyle } from '../../../../theme';

import LabTestsContext from '../../../../context/Lab/LabTestsContext'
import { connect } from 'react-redux';
import { IttyniState } from '../../../../store';
import { LabTestsState } from '../../../../store/webSite/home/types';
import { TestList } from '../../../../components/Listing/Listing'
import styled from '../../../../theme/styled-components';

interface TestsListingProps extends LabTestsState { }

export const LabTestsListing: React.FunctionComponent<TestsListingProps> = ({ fetching, data, Panel }) => {
    return (
        <>
            <IttyniAppGlobals />

            <PanelOfSelectedTests >
                <StyledList>
                {Panel ?
                    Panel.map(test =>
                        <Li key={test.name}>
                            <div>{test.mnemonic}</div>
                            <div>{test.name}</div>
                            <div>{test.price}</div>                            
                        </Li>
                    )
                    :
                    `
                        !!!  Merci de clicker sur des analyses au dessous pour calculer la totalite de votre bilan
                        ou chercher sur la bare de recherche au dessus
                    `
                }
                </StyledList>
            </PanelOfSelectedTests>
            <h4>Listes des Analyses les Plus demandees</h4>
            <LabTestsContext>
                {({ labtestsFrView }) => {
                    if (data === undefined) {
                        labtestsFrView();
                        return <b>Loading.....</b>
                    }
                    else return (
                        <TestList items={data} panel={Panel}/>
                    )
                }}

            </LabTestsContext>
        </>
    )
};

const mapStateToProps = ({ WebStates }: IttyniState) => ({
    fetching: WebStates.homeState.LabTests.fetching,
    data: WebStates.homeState.LabTests.data,
    Panel: WebStates.homeState.LabTests.Panel
})

export const LabTestsListingFr = connect(mapStateToProps)(LabTestsListing);

export const IttyniAppGlobals = createGlobalStyle`
    *, body {
        margin : 0;
        padding : 0;
    }
    
    body {
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        font-style: normal;
        -webkit-text-size-adjust: 100%;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-rendering: optimizeLegibility;
        font-feature-settings: "pnum";
        font-variant-numeric: proportional-nums;
        background-color: #e0e0e0;
        margin: 0px;
        text-rendering: optimizeLegibility;
        -webkit-font-smoothing: antialiased;
        overflow: auto;
    }
    
`

const PanelOfSelectedTests = styled.div`
   
    heigth : 100px;
    position: relative;

    margin-bottom: 1rem;
    border: 1px solid transparent;
    border-radius: .25rem;
    color: #0c5460;

`
const StyledList = styled.ul`
    padding : 0;
    list-style-type: none;
    border-left: 5px solid #cd0c0c;
`
const Li = styled.li`
    display: flex;
    background-color: white; 
    padding: 5px;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.2);
    transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
`