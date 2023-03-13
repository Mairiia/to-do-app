import React from 'react';
import './User.css';
import User from "./User";

const UsersList = ({users}) => {
    return (
        users.map(user => {
            return <User
                key={user.id}
                user={user}
            />
        })
    );
};

export default UsersList;