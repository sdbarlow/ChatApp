import { Link } from "react-router-dom";
import { useState } from "react";

function LoginModal({ onLogin }) {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  function handleChange(e){
    if (e.target.id == "username"){
      setUsername(e.target.value);
    }
    else {
      setPassword(e.target.value);
    }
  }

  function handlesubmit(event){
    event.preventDefault();
    onLogin(username);
  }
  return (
    <div>
      <h2>Log in</h2>
      <form onSubmit={handlesubmit}>
        <input id="username" value={username} onChange={handleChange} type="text"/>
        <input id="password" value={password} onChange={handleChange} type="text"/>
        <input type="submit"/>
      </form>
      <Link to="/">Back to home</Link>
    </div>
  );
}

export default LoginModal;
