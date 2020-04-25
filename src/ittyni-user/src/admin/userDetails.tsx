import * as React from 'react';
import user from '../controller/user';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

export const UserDetails = () => {

    const { username, userId } = useParams();

    const fetchUser = async () => await user.getUserDetails(userId || '');

    // set variables 
    const [account, setAccount] = React.useState('');

    const userDetails = useSelector((state: any) => state.users.userDetails);

    const laboAccount = useSelector((state: any) => state.users.laboAccount);

    if (!userDetails) fetchUser();

    return (userDetails &&
        <>
            <h1>{userDetails.email.split('@')[0]} details</h1>
            <hr />
            <h2>confidentielle</h2>
            <hr />
            <div><label>id</label> : {userDetails.id}</div>
            <div><label>email</label> : {userDetails.email}</div>
            <div>
                <h2>roles</h2>
                <hr />
                <div>
                    <select>
                        <option selected disabled>choisir role</option>
                        <option>admin</option>
                        <option>director</option>
                    </select>
                    <button onClick={e => user.addRoleToUser(userDetails.id)}>
                        ajouter
                    </button>
                </div>
                <div>
                    <label>entre nom laboratoire</label>
                    <input type="text" onChange={e => user.getLabAccount(e.target.value)} />
                    <button onClick={e=>user.linkAccount(userDetails.id, account)}>Link {account}</button>
                    <div>{laboAccount &&
                        <ul>
                            {
                                laboAccount.map((lab: any) =>
                                    <li onClick={(e: any) => setAccount(e.target.innerHTML)}>{lab.name}</li>
                                )}

                        </ul>
                    }
                    </div>
                </div>
                <ul>{userDetails.role.map((r: any) =>
                    <li key={r.id}>
                        <h5>{r.createdAt}</h5>
                        <ul>
                            <li><label>nom de role : </label>{r.name}</li>
                            <li><label>ajouter par : </label>{r.addedBy}</li>
                        </ul>
                    </li>
                )}</ul>
            </div>

        </>
    )
        ||
        (<div>Loading.....</div>)
}