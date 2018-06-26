import React from 'react';

const SendMessageForm = (props) => {
    return (
        <form className={"send-message-form"} onSubmit = {props.handleSubmit}>
            <input onChange={props.handleMessageChange}
                   value={props.message}
                   type="text"
                   placeholder="Type you message and hit ENTER"/>

        </form>
    );
};

export default SendMessageForm;
