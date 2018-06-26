import React from 'react';
// import DUMMY_DATA from './DUMMY_DATA';
import Message from './Message';

const MessageList = ({messages}) =>{
    return (
        <div className="message-list">
            {
                messages.map((message, index) => {
                return (
                    <Message key={index} username={message.senderId} text={message.text}/>
                )
            })}
        </div>
    );
};

export default MessageList;



