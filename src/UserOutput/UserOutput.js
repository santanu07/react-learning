import React from 'react';
import UserInput from '../UserInput/UserInput';
import './UserOutput.css';
const UserOutput = (props) => {
    return (
        <div className="userOutput">
            <p>User name : {props.userName}</p>
            <p></p>
        </div>
    )
}

export default UserOutput;