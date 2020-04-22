import * as React from 'react';
import { Table } from '../../../ui-ittyni/src';
import { User } from '../controller/user';
import { useSelector } from 'react-redux';


export const listAllUsers = () => {

    const user = new User();

    const fetchUsers = async ()=> await user.getAllUsers();

    const users = useSelector((state: any) => state.users.users)

    if(users === undefined || users === null || users.length <=0 ){
        fetchUsers();
    }  

    return (users &&
        <div>
            <h1>List des Utilisateurs de ittyni</h1>
            <Table.Container>
                <Table.Header>
                    <Table.THead>
                        <Table.HeaderRow>
                            <th style={{ flex: 4 }}><input placeholder="id" /></th>
                            <th style={{ flex: 4 }}><input placeholder="email" /></th>
                            <th style={{ flex: 2 }}><input placeholder="role" /></th>
                        </Table.HeaderRow>
                    </Table.THead>
                </Table.Header>
                <Table.Content>
                    <Table.TBody>
                        {users.map((user: any) => (
                            <Table.ContentRow key={user.id}>
                                <td style={{ flex: 4 }}>{user.id}</td>
                                <td style={{ flex: 4 }}>{user.email}</td>
                                <td style={{ flex: 2 }}>{user.role.map((r: any) => <span key={r.name}>{r.name} - </span>)}</td>
                            </Table.ContentRow>
                        ))}
                    </Table.TBody>
                </Table.Content>
            </Table.Container>

        </div>
    )
        ||
        (<div>Loading....</div>)
}