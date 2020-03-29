import * as React from 'react';
import { connect } from 'react-redux';
import { IttyniState } from '../../../../store/index';
import { Labos } from '../controller/Labos';
import * as Table from '../../common/table'

interface Props {
    LabosList: []
}
// list , filter and link to test details
export const LaboListAll = ({ LabosList }: any) => {

    const Labo = new Labos()

    if (LabosList.length <= 0) {
        Labo.LaboAllList();
        return <div>loading......</div>
    }
    else
        return (<div>
            <h1>List des Analyses Medicales</h1>
            <Table.Container>
                <Table.Content>
                    <Table.TBody>
                        {LabosList.map((item: any) =>
                            <Table.ContentRow key={item.name.en}>
                                <td style={{ flex: 9 }}>{item.name.en}</td>
                                <td style={{ flex: 1 }}>{item.reference.Mnemonic}</td>
                                <td style={{ flex: 1 }}>{item.finance[0] ? item.finance[0].Bcode : ''}</td>
                            </Table.ContentRow>
                        )}
                    </Table.TBody>
                </Table.Content>
            </Table.Container>
        </div>)
}

const mapStateToProps = ({ labState }: IttyniState) => ({
    LabosList: labState.test ? labState.test.LabosAll : undefined
})

export default connect(mapStateToProps)(LaboListAll)