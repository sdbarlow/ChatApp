import { Link, useNavigate } from "react-router-dom";
import '../Styles/SignUp.css'


function SignUpModal({ submitFunction }) {
  const handleSubmit = async (event) => {
    event.preventDefault();
    submitFunction(event)
  };
  


  return (
    <div id="sign-up-container">
      <h2>Sign up</h2>
      <form id="input-form" onSubmit={handleSubmit}>
        <label className="labels" htmlFor="firstName">First Name</label>
        <input className="inputs" type="text" id="firstName" name="first_name"/>

        <label className="labels"  htmlFor="lastName">Last Name</label>
        <input className="inputs" type="text" id="lastName" name="last_name"/>

        <label className="labels"  htmlFor="email">Email</label>
        <input className="inputs" type="email" id="email" name="email"/>

        <label className="labels"  htmlFor="password">Password</label>
        <input className="inputs" type="password" id="password" name="password"/>

        <label className="labels"  htmlFor="image">Upload Image</label>
        <input className="inputs" type="text" id="image" name="img"/>

        <input id="submit" type="submit" value="Sign up"/>
      </form>
      <Link to="/">Back to home</Link>
    </div>
  );
}

export default SignUpModal;
