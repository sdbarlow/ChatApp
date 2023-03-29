import React from 'react'
import '../Styles/MessageDisplay.css'
import { useParams } from 'react-router-dom';

function MessageDisplay({ users, convos }) {
  const { id } = useParams();
console.log(convos)
  return (
    <div id="detail-container">
      <h1>Conversation {id} Detail</h1>
      <div className="message-container">
        <div className="message-display">
          {convos.filter(convo => {
            let receiverwords = convo.fields.receiver.length >= 1;
            <div id="receiver-message">{receiverwords}</div>  
          })}
          {convos.filter(convo => {
            let senderwords = convo.fields.sender.length >= 1;
            <div id="receiver-message">{senderwords}</div>  
          })}
        </div>
        <div className="message-input">
          <input type="text"></input>
        </div>
      </div>
    </div>
  )
}

export default MessageDisplay