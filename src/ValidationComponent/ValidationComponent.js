import React from 'react';

const ValidationComponent = (props) => {
    let validationMsg = "Text too short";
    if (props.userInpuLength >= 5) {
        validationMsg = 'Text long enough'
    }
    return (
        <div>
            <p>{validationMsg}</p>
        </div>
    )
}

export default ValidationComponent;