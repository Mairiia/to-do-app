import React from 'react';
import './User.css';
import User from "./User";

const UsersList = ({users, change, taskId}) => {
    return (
        users.map(user => {
            return <User
                key={user.id}
                change={change}
                user={user}
                taskId={taskId}
            />
        })
    );
};

export default UsersList;