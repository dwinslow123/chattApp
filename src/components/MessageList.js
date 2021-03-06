import React, { Component } from 'react';

const DUMMY_DATA = [
  {
    senderId: 'perborgen',
    text: 'Hey, how is it going?'
  },
  {
    senderId: 'janedoe',
    text: 'Great! How about you?'
  },
  {
    senderId: 'perborgen',
    text: 'Good to hear! I am great as well.'
  }
]

class MessageList extends Component {
  render() {
    return (
      <div className="message-list">
        {DUMMY_DATA.map((message, i) => {
          return (
            <div className="message">
              <div>{ message.text }</div>
              <div>{ message.senderId }</div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default MessageList;