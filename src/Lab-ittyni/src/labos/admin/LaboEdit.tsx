import React from 'react'
import styled from '../../../../theme/styled-components'
import { useRouteMatch } from 'react-router-dom'
import { Labos } from '../controller/Labos'

const labos = new Labos()


export const LaboEdit = ({laboDetails, userId} : any) => {

    const {params : {username, labo}} : any = useRouteMatch();

    if(laboDetails === undefined || laboDetails.account.name !== labo) {        
        labos.laboDetailsFetch(labo);
        return <span>Loadin .....</span>
    } else {
        return (
            <>
                <h1>{laboDetails.account.name}</h1>
                <Tree>
                    <li><h2>Account</h2>
                    <SubList>
                        <li>
                            <label>name</label> : 
                            <input 
                                placeholder={`${laboDetails.account.name}`}
                            />
                        </li>
                        <li>
                            <label>code</label> : 
                            <input 
                                placeholder={`${laboDetails.account.code}`}
                            />
                        </li>
                    </SubList>
                    </li>

                    <li><h2>Contact</h2>
                    <SubList>
                        <li>
                            <label>fix</label> : 
                            <input 
                                placeholder={`${laboDetails.contact.tele.fix[0]}`}
                            />
                        </li>
                        <li>
                            <label>fax</label> : 
                            <input 
                                placeholder={`${laboDetails.contact.tele.fax[0]}`}
                            />
                        </li>
                        <li>
                            <label>address</label> : 
                            <input 
                                placeholder={`${laboDetails.contact.address.street}`}
                            />
                        </li>
                    </SubList>
                    </li>
                    
                </Tree>
            </>
            )
    }
}


const Tree = styled.ul`
    margin: 1em;
    list-style: none;
    display : flex;
    flex-direction : column;
    li {

        line-height: 1.2;
        position: relative;
        padding: 0 0 1em 1em;

        input {
            width : 50%;
        }

        h2 {margin : 5px 0;}
    }
`
const SubList = styled('ul')`
    margin: 0;
    list-style: none;
    display : flex;
    flex-direction : column;
    li {
        flex-basis : 100%;
        input {
            width : 50%;
        }
    }
`
const Button = styled.button`
    width : 45%;
    font-size : 14px;
    font-weight: 700;
`