import React from 'react'
import { Link } from 'react-router-dom'
import '../Styles/Header.css'

function Header({ loggedinusername, entire }) {
  console.log(entire)
  return (
    <header>
      <div id="header">
        <h1>HEADER</h1>
        <h1>Chat App</h1>
        <h1>Logged In As: <Link to={`/account/${entire.pk}`}>{loggedinusername}</Link></h1>
      </div>
    </header>
  )
}

export default Header