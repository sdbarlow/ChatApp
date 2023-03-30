import React from 'react'
import { useState } from 'react';
import '../Styles/MessageDisplay.css'
import { useParams } from 'react-router-dom';

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

console.log(convos.length)
console.log(checkifclicked)
if ((convos.length === 0) || (checkifclicked)){
  return (
    <div id="detail-container">
      <h1>Conversation {id} Detail</h1>
      <div className="message-container">
        <input type="text" placeholder="Search..." className="search" onChange={(e) => setQuery(e.target.value)}/>
        <table>
          <tbody>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Surname</th>
              <th>Email</th>
            </tr>
            {search().map((user) => (
              user.pk !== loggedinuser ? (
                <tr onClick={onClick} id={user.pk} key={user.id}>
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
      return (
        <div id="detail-container">
        <div id="header-display"><h1>Conversation {id} Detail</h1><div onClick={clickHandler} id="new-message-icon-container"><img id="new-message-icon" src='../images/mail.png'></img></div></div>
        <div className="message-container">
        <div className="message-display">
          {convos.map((convo) => (
            id == convo.fields.sender ? (
              <div className="receiver-message" >{convo.fields.convo}</div>
              ) : id == convo.fields.receiver ? (
              <div className="sender-message">{convo.fields.convo}</div>
              ) : null
          ))}
        </div>
        <div className="message-input">
          <input value={message} onChange={handleChange} type="text"></input><button onClick={() => messageClickHandler(id)}>⇪</button>
        </div>
      </div>
    </div>
  )
}
export default MessageDisplay