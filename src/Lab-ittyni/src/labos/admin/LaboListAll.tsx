import * as React from 'react';
import { connect } from 'react-redux';
import { IttyniState } from '../../../../store/index';
import { Labos } from '../controller/Labos';
import * as Table from '../../common/table'
import { Link, useRouteMatch } from 'react-router-dom';

interface Props extends LabLaboState{}

// list , filter and link to test details
export const LaboListAll = ({ listAll }: any) => {

    const Labo = new Labos()

    const { params: { username } }: any = useRouteMatch()

    if (listAll === undefined) {
        Labo.LaboListAll();
        return <div>loading......</div>
    }
    else
        return (<div>
            <h1>List des Laboratoire Medicales</h1>
            <Table.Container>
                <Table.Header>
                    <Table.THead>
                        <Table.HeaderRow>
                            <th style={{ flex: 2 }}><input placeholder="nom du labo" /></th>
                            <th style={{ flex: 2 }}><input placeholder="tele" alt="tele" /></th>
                            <th style={{ flex: 6 }}><input placeholder="address" /></th>
                        </Table.HeaderRow>
                    </Table.THead>
                </Table.Header>
                <Table.Content>
                    <Table.TBody>
                        {listAll.map((item: any) =>
                            <Table.ContentRow key={item.account.name}>
                                <td style={{ flex: 2 }}><Link to={`/admin/${username}/lab/labo/${item.account.name}`} >{item.account.name}</Link></td>
                                <td style={{ flex: 2 }}>{item.contact.tele.fix[0]}</td>
                                <td style={{ flex: 6 }}>{item.contact.address.street}</td>
                            </Table.ContentRow>
                        )}
                    </Table.TBody>
                </Table.Content>
            </Table.Container>
        </div>)
}

const mapStateToProps = ({ labState }: IttyniState) => ({
    listAll: labState.labo ? labState.labo.listAll : undefined
})

export default connect(mapStateToProps)(LaboListAll)