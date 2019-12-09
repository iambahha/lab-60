import React from 'react';
import { Form, FormGroup, Label } from 'reactstrap';
import Button from "../UI/Button/Button";
import Input from "../UI/Input/Input";
import './InputForm.css'

const InputForm = props => {
    return (
        <Form className="form">
            <FormGroup>
                <Label for="exampleText">Author</Label>
                <Input type="text" name="text" id="exampleText"
                       placeholder="author"
                       onValue={props.author}
                       onInput={props.changeAuthor}
                />
            </FormGroup>
            <FormGroup>
                <Label for="exampleText">Message</Label>
                <Input type="textarea" name="text" id="exampleText"
                       placeholder="message"
                       onValue={props.message}
                       onInput={props.changeMessage}
                />
            </FormGroup>
            <Button onSendClick={props.sendMessage} label="Send">Add Message</Button>
        </Form>
    );
};

export default InputForm;
