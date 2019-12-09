import React from 'react';
import Btn from "reactstrap/lib/Button";

const Button = props => {

    return (
        <Btn onClick={props.onSendClick}>
            {props.label}
        </Btn>
    );
};

export default Button;
