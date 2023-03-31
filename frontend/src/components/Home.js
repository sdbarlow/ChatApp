import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import '../Styles/Home.css'
function Home() {

  return (
    <>
    <div id="home-container">
    <div id="form-container">
      <h1 id="chat">CHAT</h1>
      <h1 id="app">APP</h1>
    </div>
    <div id="buttons-container">
      <button id="sign-up-button"><Link to="/SignUp">Sign up</Link></button>
      <button id="log-in-button"><Link to="/LogIn">Log in</Link></button>
    </div>
    </div>
    <Outlet/>
    </>
  );
}

export default Home;
