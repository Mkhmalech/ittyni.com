import React from 'react'
import styled from '../../../../theme/styled-components'
import { useRouteMatch, useParams } from 'react-router-dom';
import { Labtests } from '../controller/labtests'

const labtest = new Labtests()


export const LabTestEdit = ({LabTest, userId} : any) => {

    const  {username, test} : any = useParams();

    if(LabTest === undefined || LabTest === null || LabTest.name.en !== test) {        
        labtest.labTestEnFetchDetails(test);
        return <span>Loadin .....</span>
    } else {
        labtest.setLabTestNameEn(LabTest.name.en);
        return (
            <>
                <h1>{LabTest.name.en}</h1>
                <Tree>
                    <li>
                        <label>Nom francais</label> : 
                        <input 
                            placeholder={`${LabTest.name.fr}`}
                            onChange={e=>labtest.setLabTestNameFr(e.target.value)}
                        />
                    </li>
                    <li>
                        <label>CPT</label> : 
                    <input 
                        placeholder={`${LabTest.reference.CPT}`}
                        onChange={e=>labtest.setCPTCode(e.target.value)}
                    />
                    </li>
                    <li>
                        <label>Mnemonic</label> : 
                        <input 
                            placeholder={`${LabTest.reference.Mnemonic}`}
                            onChange={e=>labtest.setMnemonic(e.target.value)}/>
                    </li>
                    <li>
                        <label>Bcode</label> : 
                    <input 
                    placeholder={`${LabTest.finance[0].Bcode}`}
                    onChange={e=>labtest.setFinanceBCode(e.target.value)}/>
                    </li>
                    <li><label>Nature de Prelevement</label> : <input onChange={e=>labtest.setSampleType(e.target.value)} placeholder={`${LabTest.specimen.nature}`}/></li>
                    <li><label>Couleur du Tube</label> : <input onChange={e=>labtest.setSampleCollectorColor(e.target.value)} placeholder={`${LabTest.specimen.tubeColor}`}/></li>
                    <li><label>Nombre des Tubes</label> : <input onChange={e=>labtest.setSampleCollectorQuantity(e.target.value)} placeholder={`${LabTest.specimen.numberoftube}`}/></li>
                    <li><label>Volume Min</label> : <input onChange={e=>labtest.setSampleVolumeMin(e.target.value)} placeholder={`${LabTest.specimen.volumemin}`}/></li>
                    <li><Button onClick={e=>labtest.getUpdatesDatat(userId)}>Mettre a jour</Button></li>
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
    }
`
const Button = styled.button`
    width : 45%;
    font-size : 14px;
    font-weight: 700;
`