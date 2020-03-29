import * as React from 'react';
import { connect } from 'react-redux';
import { IttyniState } from '../../../../store/index';
import { Labtests } from '../controller/labtests';
import * as Table from '../../common/table'

interface Props {
    LabtestsList: []
}
// list , filter and link to test details
export const LabTestListAll = ({ LabtestsList }: any) => {

    const labtest = new Labtests()

    if (LabtestsList.length <= 0) {
        labtest.labTestAllList();
        return <div>loading......</div>
    }
    else
        return (<div>
            <h1>List des Analyses Medicales</h1>
            <Table.Container>
                <Table.Content>
                    <Table.TBody>
                        {LabtestsList.map((item: any) =>
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
    LabtestsList: labState.test ? labState.test.labtestsAll : undefined
})

export default connect(mapStateToProps)(LabTestListAll)