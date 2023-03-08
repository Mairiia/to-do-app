import React from 'react';
import './User.css';
import {useNavigate} from "react-router-dom";
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';



const User = (props) => {
    const navigate = useNavigate();

    const navigateToRoute = () => {
        navigate(`/users/${props.user.id}`);
    };


    return (
        <ToggleButtonGroup  value={props.taskId}  className={'UserLi'} exclusive>
            <ToggleButton value={props.user.id} className={'User'} onClick={() => { navigateToRoute(); props.change(props.user); }}>
                {props.user.name}
            </ToggleButton>
        </ToggleButtonGroup>
    );
};

export default User;