import React from 'react';
import Message from "./Message/Message";
import './Messages.css';

const Messages = props => {
    return (
        <div className="messages">
            {props.messages.map(message => {
                const messageDate = new Date(message.datetime);
                const formattedDate = messageDate.toLocaleString('ru-Ru');

                return (
                    <Message
                        key={message.id}
                        author={message.author}
                        message={message.message}
                        datetime={formattedDate}
                    />
                )
            })}
        </div>
    );
};

export default Messages;
