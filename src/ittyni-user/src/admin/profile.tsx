import * as React from 'react';

export const Profile = ({username} : any) => (
    <div>
        <h1>{username} Profile</h1>
        <p>Email : {`${username}@gmail.com`}</p>
    </div>
)