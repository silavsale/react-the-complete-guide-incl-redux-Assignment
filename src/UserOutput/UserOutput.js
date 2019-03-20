import React from 'react';
import './UserOutput.css';


const userOutput = (props) => {
    return (
        <div className="UserOutput">
            <p>
                User name is <strong> {props.name} </strong>.
            </p>
        </div>
    )
};

export default userOutput;
