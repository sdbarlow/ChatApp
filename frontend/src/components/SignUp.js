import React from 'react'
import { Link } from 'react-router-dom'

function SignUp() {
  return (
    <>
    <div>ChatApp</div>
    <form>
      <input type="text" placeholder='Email'/>
      <input type="text" placeholder='Password'/>
      <Link to="/"><input type="submit"></input></Link>
    </form>
    </>
  )
}

export default SignUp