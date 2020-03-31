import * as React from 'react';
import { connect } from 'react-redux';
import { IttyniState } from '../../../../store/index';
import { Labtests } from '../controller/labtests';
import * as Table from '../../common/table'
import { Link, useRouteMatch } from 'react-router-dom';

interface Props {
    LabtestsList: []
}
// list , filter and link to test details
export const LabTestListAll = ({ LabtestsList }: any) => {

    const labtest = new Labtests()

    const { params: { username } }: any = useRouteMatch()
    if (LabtestsList <= 0) labtest.labTestAllList()
    return ( <>
            <h1>List des Analyses Medicales</h1>
            <Table.Container>
                <Table.Header>
                    <Table.THead>
                        <Table.HeaderRow>
                            <th style={{ flex: 8 }}><input placeholder="nom du test" onChange={e => labtest.filterTestsList(e.target.value)} /></th>
                            <th style={{ flex: 2 }}><input placeholder="N.U" alt="Nom Unique" /></th>
                            <th style={{ flex: 1 }}><input placeholder="B code" /></th>
                        </Table.HeaderRow>
                    </Table.THead>
                </Table.Header>
                <Table.Content>
                    <Table.TBody>
                        {LabtestsList.map((item: any) =>
                            <Table.ContentRow key={item.name.en}>
                                <td style={{ flex: 8 }}><Link to={`/admin/${username}/lab/labtests/${item.name.en}`}>{item.name.en}</Link></td>
                                <td style={{ flex: 2 }}>{item.reference.Mnemonic}</td>
                                <td style={{ flex: 1 }}>{item.finance[0] ? item.finance[0].Bcode : ''}</td>
                            </Table.ContentRow>
                        )}
                    </Table.TBody>
                </Table.Content>
            </Table.Container>
        </>)
}

const mapStateToProps = ({ labState }: IttyniState) => ({
    LabtestsList: labState.test ? labState.test.labtestsAll : undefined
})

export default connect(mapStateToProps)(LabTestListAll)