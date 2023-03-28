import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import SignUpModal from "./SignUp";
import LoginModal from "./LogIn";

function Home() {

  return (
    <>
    <div>
      <h1>Chat App</h1>
      <Link to="/SignUp">Sign up</Link>
      <Link to="/LogIn">Log in</Link>
    </div>
    <Outlet/>
    </>
  );
}

export default Home;
