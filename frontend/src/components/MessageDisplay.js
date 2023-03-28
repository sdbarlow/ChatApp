import React from 'react'
import '../Styles/MessageDisplay.css'
import { useParams } from 'react-router-dom';

function MessageDisplay() {
  const { id } = useParams();

  return (
    <div id="detail-container">
      <h1>Conversation {id} Detail</h1>
    </div>
  )
}

export default MessageDisplay