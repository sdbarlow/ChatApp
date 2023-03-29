import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import Header from './Header'
import ListComponent from './ListComponent'
import MessageDisplay from './MessageDisplay'
import '../Styles/Action.css'
import { useEffect, useState } from 'react'


function Action({ users, loggedinuser, loggedinusername, entire, convos }) {







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