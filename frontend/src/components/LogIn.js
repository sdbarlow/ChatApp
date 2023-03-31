import { Link } from "react-router-dom";
import { useState } from "react";
import '../Styles/LogIn.css'
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
    <div id="log-in-container">
      <h2>Log in</h2>
      <form id="log-in-form" onSubmit={handlesubmit}>
        <label htmlFor="email">Email:</label>
        <input className="input-fields" id="email" name="email" value={email} onChange={handleChange} type="text"/>
        <label htmlFor="password">Password:</label>
        <input className="input-fields" id="password" name="password" value={password} onChange={handleChange} type="text"/>
        <input id="submit-btn" className="input-fields" value="Enter" type="submit"/>
      </form>
      <Link to="/">Back to home</Link>
    </div>
  );
}

export default LoginModal;
