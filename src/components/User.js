import React from 'react';
import './User.css';
import {NavLink, useNavigate} from "react-router-dom";



const User = (props) => {
    const navigate = useNavigate();

    return (
        <div  className={'UserLi'} >
            <button  className={'User'} onClick={() => navigate(`/users/${props.user.id}`)}>
                <NavLink
                    to={`/users/${props.user.id}`}
                    className={({isActive}) => isActive ? 'link active' : 'link'}>
                    {props.user.name}
                </NavLink>
            </button>
        </div>
    );
};

export default User;