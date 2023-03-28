import React from 'react'
import { Link } from 'react-router-dom'
import { Routes, Route } from "react-router-dom"
import Action from './Action'
function Home({ LogIn }) {
  return (
    <>
    <div>ChatApp</div>
    <Link to="/home/SignUp"><button>Sign Up</button></Link>
    <Link to="/home/LogIn"><button>Log In</button></Link>
    <Routes>
        <Route path="/Action" element={Action}></Route>
    </Routes>
    </>
  )
}

export default Home