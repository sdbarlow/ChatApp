import { Link } from "react-router-dom";
import { useState } from "react";

function LoginModal({ onLogin }) {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  function handleChange(e){
    if (e.target.id == "email"){
      setEmail(e.target.value);
    }
    else {
      setPassword(e.target.value);
    }
  }

  function handlesubmit(event){
    event.preventDefault();
    onLogin(email, password);
  }


  return (
    <div>
      <h2>Log in</h2>
      <form onSubmit={handlesubmit}>
        <label htmlFor="email">Email:</label>
        <input id="email" name="email" value={email} onChange={handleChange} type="text"/>
        <label htmlFor="password">Password:</label>
        <input id="password" name="password" value={password} onChange={handleChange} type="text"/>
        <input type="submit"/>
      </form>
      <Link to="/">Back to home</Link>
    </div>
  );
}

export default LoginModal;
