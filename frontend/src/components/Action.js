import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import Header from './Header'
import ListComponent from './ListComponent'
import MessageDisplay from './MessageDisplay'
import '../Styles/Action.css'


function Action({ loggedinuser }) {

  return (
    <>
    <Header/>
    <div id="main-container">
      <ListComponent loggedinuser={loggedinuser} />
      <MessageDisplay loggedinuser={loggedinuser}/>
    </div>
    <Outlet/>
    </>
  )
}

export default Action