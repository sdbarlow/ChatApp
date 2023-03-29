import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import Header from './Header'
import ListComponent from './ListComponent'
import MessageDisplay from './MessageDisplay'
import '../Styles/Action.css'
import { useEffect, useState } from 'react'


function Action({ loggedinuser, loggedinusername, entire }) {

  const [convos, setConvos] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch(`/api/conversations/${loggedinuser}/`)
      .then(resp => resp.json())
      .then(data => {setConvos(JSON.parse(data));
      })
  }, [])

  useEffect(() => {
    fetch('/api/users/')
      .then(resp => resp.json())
      .then(data => {setUsers(JSON.parse(data));
      })
  }, [])
console.log(users)
console.log(convos)
  return (
    <>
    <Header entire={entire} loggedinusername={loggedinusername}/>
    <div id="main-container">
      <ListComponent users={users} convos={convos} loggedinuser={loggedinuser} />
      <MessageDisplay users={users} convos={convos} loggedinuser={loggedinuser}/>
    </div>
    <Outlet/>
    </>
  )
}

export default Action