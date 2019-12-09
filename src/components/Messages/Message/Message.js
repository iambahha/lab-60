import React from 'react';
import {Card, CardText, CardTitle} from "reactstrap";
import './Message.css'

const Message = props => {
    return (
        <div>
            <Card className="message" body outline color="secondary">
                <CardTitle>Author: {props.author}</CardTitle>
                <CardText>Message: {props.message}</CardText>
                <CardText>Date: {props.datetime}</CardText>
            </Card>
        </div>
    );
};

export default Message;
