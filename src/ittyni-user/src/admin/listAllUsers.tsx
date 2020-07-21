import * as React from 'react';
import { Table } from '../../../ui-ittyni/src';
import user  from '../controller/user';
import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';


export const listAllUsers = () => {

    const fetchUsers = async ()=> await user.getAllUsers();

    const {username} = useParams();

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
                                <td style={{ flex: 4 }}>
                                    <Link to={`/admin/${username}/users/details/${user.id}`}>{user.id}</Link>
                                </td>
                                <td style={{ flex: 4 }}>{user.email}</td>
                                <td style={{ flex: 2 }}>{user.role.map((r: any) => <span key={r.id}>{r.name} - </span>)}</td>
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