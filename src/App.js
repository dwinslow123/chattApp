import React, { Component } from 'react';
import Chatkit from '@pusher/chatkit';
import { tokenUrl, instanceLocator } from './config';

import MessageList from './components/MessageList';
import SendMessageForm from './components/SendMessageForm';
import RoomList from './components/RoomList';
import NewRoomForm from './components/NewRoomForm';

class App extends Component {

  componentDidMount() {
    const chatManager = new Chatkit.ChatManager({
      instanceLocator,
      userId: 'dwinslow',
      tokenProvider: new Chatkit.TokenProvider({
        url: tokenUrl
      })
    })

    chatManager.connect()
      .then(currentUser => {
        currentUser.subscribeToRoom({
          roomId: 10364486,
          hooks: {
            onNewMessage: message => {
              console.log('message.text: ', message.text);
            }
          }
        })
      })
  }

  render() {
    return (
      <div className="app">
        Main App Page.
        <RoomList />
        <MessageList />
        <SendMessageForm />
        <NewRoomForm />
      </div>
    );
  }
}

export default App;