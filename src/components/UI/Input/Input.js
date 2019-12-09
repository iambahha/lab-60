import React from 'react';
import Inputs from "reactstrap/lib/Input";


const Input = props => {
    return (
        <Inputs type="text"
               className="form-control"
               value={props.onValue}
               placeholder={props.placeholder}
               onChange={props.onInput}
        />
    );
};

export default Input;
