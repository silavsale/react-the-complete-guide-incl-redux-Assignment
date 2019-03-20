import React from 'react';

const userInput = (props) => {
    const inputStyle = {
        border: '2px solid green'
    };
    return (
        <div>
            <input
                type="text"
                style={inputStyle}
                onChange={props.changed}
                value={props.currentName}/>
        </div>
    )
};

export default userInput;
