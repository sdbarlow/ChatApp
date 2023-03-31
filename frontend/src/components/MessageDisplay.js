import React from 'react'
import { useState } from 'react';
import '../Styles/MessageDisplay.css'
import { useParams } from 'react-router-dom';
import { useEffect, useRef } from 'react';

function MessageDisplay({ users, convos, handleClick, loggedinuser, messageSend, message, messChanger }) {
  const { id } = useParams();
  const [query, setQuery] = useState("");
  const [checkifclicked, setCheckIfClicked] = useState(false);


console.log(convos)
console.log(users)
console.log(message)

function handleChange(e){
  messChanger(e.target.value)
}

function messageClickHandler(currentid){
  messageSend(message, currentid)
}

function clickHandler(){
  setCheckIfClicked(!checkifclicked)
}

function onClick(e){
  const userId = e.target.closest('tr').id;
  setCheckIfClicked(!checkifclicked)
  handleClick(userId);
}

const search = () => {
  return users.filter((user) =>
    user.fields.first_name.toLowerCase().includes(query.toLowerCase())
  );
}

function ChatBox({ checkifclicked }) {
  const chatBoxRef = useRef(null);

  useEffect(() => {
    chatBoxRef.current.scrollTop = chatBoxRef.current.scrollHeight;
  }, [checkifclicked]);
}
console.log(convos.length)
console.log(checkifclicked)
if ((convos.length === 0) || (checkifclicked)){
  return (
    <div id="detail-container">
      <h1>Start A Conversation</h1>
      <div className="message-container">
        <input type="text" placeholder="Search..." className="search" onChange={(e) => setQuery(e.target.value)}/>
        <table id="results-table">
          <tbody>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Surname</th>
              <th>Email</th>
            </tr>
            {search().map((user) => (
              user.pk !== loggedinuser ? (
                <tr className="table-row" onClick={onClick} id={user.pk} key={user.id}>
                  <td><div id="mini-image"><img id="user-image" src={user.fields.img}></img></div></td>
                  <td className="user-table-data">{user.fields.first_name}</td>
                  <td className="user-table-data">{user.fields.last_name}</td>
                  <td className="user-table-data">{user.fields.email}</td>
                </tr>
              ) : null
            ))}
          </tbody>
        </table>
      </div>
      </div>
      )}

      console.log(id)
      console.log(convos)
      return (
        <div id="detail-container">
          <div id="header-display">
            <div onClick={clickHandler} id="new-message-icon-container">
              <img id="new-message-icon" src='../images/mail.png' />
            </div>
          </div>
          <div className="message-container">
            <div className="message-display">
              <div className="receiver-field">
                {convos.sort((a, b) => a.pk - b.pk).map((convo) => {
                  console.log(convo);
                  if (convo.fields.sender == id) {
                    return <div id="chat-bubble-two"><h4 className="receiver-text">{convo.fields.convo}</h4></div>;
                  } else if (convo.fields.receiver == id) {
                    return <div id="chat-bubble"><h4 className="sender-text">{convo.fields.convo}</h4></div>;
                  }
                  return null;
                })}
              </div>
            </div>
          </div>
          <div className="message-input">
            <input value={message} onChange={handleChange} type="text" /><button onClick={() => messageClickHandler(id)}>⇪</button>
          </div>
        </div>
      );
  }
      
      
export default MessageDisplay