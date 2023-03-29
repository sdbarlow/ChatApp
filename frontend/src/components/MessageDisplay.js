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
          {/* <div id="receiver-message">{convos[0].fields.convo}</div>  
          {/* person logged in */}
          {/* <div id="sender-message">{convos[1].fields.convo}</div>
          // person sending */} 
        </div>
        <div className="message-input">
          <input type="text"></input>
        </div>
      </div>
    </div>
  )
}

export default MessageDisplay