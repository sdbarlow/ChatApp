import React from 'react'
import { Link } from 'react-router-dom'
import '../Styles/Header.css'

function Header({ loggedinusername, entire }) {
  console.log(entire)
  return (
    <header>
      <div id="header">
        <h1>Chat App</h1>
        <Link to={`/account/${entire.pk}`}><div id="header-image"><img id="header-inside-image" src={entire.fields.img}></img></div></Link>
      </div>
    </header>
  )
}

export default Header