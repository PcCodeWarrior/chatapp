import React, {Component} from 'react';
import Chatkit from '@pusher/chatkit';
import MessageList from './components/MessageList';
import SendMessageForm from './components/SendMessageForm';
// import RoomList from '../components/RoomList';
// import NewRoomForm from '../components/NewRoomForm';

import {tokenUrl, instanceLocator} from './config';

class App extends Component {

    constructor() {
        super();
        this.state = {
            messages: [],
            message: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange  (e){
        console.log(e.target.value);
        this.setState({message: e.target.value})
    };

    handleSubmit  (e){
        e.preventDefault();
        console.log("in submit" + this.state.message);

    };

    componentDidMount() {
        const chatManager = new Chatkit.ChatManager({
            instanceLocator,
            userId: 'pc_code_warrior',
            tokenProvider: new Chatkit.TokenProvider({
                url: tokenUrl
            })
        });

        chatManager.connect()
            .then(currentUser => {
                currentUser.subscribeToRoom({
                    roomId: 10275968, //10332690
                    hooks: {
                        onNewMessage: message => {
                            this.setState({
                                messages: [...this.state.messages, message]
                            })
                        }
                    }
                })

            })
    }


    render() {
        return (
            <div className="app">
                {/*<RoomList />*/}
                <MessageList messages={this.state.messages}/>
                <SendMessageForm handleMessageChange = {this.handleChange} handleSubmit= {this.handleSubmit} message = {this.state.message}/>
                {/*<NewRoomForm />*/}
            </div>
        );
    }
}

export default App;
