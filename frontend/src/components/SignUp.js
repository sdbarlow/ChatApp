import { Link, useNavigate } from "react-router-dom";
import '../Styles/SignUp.css'


function SignUpModal({ submitFunction }) {
  const handleSubmit = async (event) => {
    event.preventDefault();
    submitFunction(event)
  };
  


  return (
    <div id="sign-up-page">
    <div id="sign-up-container">
      <h2 id='header'>Sign up</h2>
      <form id="input-form" onSubmit={handleSubmit}>
        <div className="field input-field" htmlFor="firstName">
        <input className="inputs" placeholder="First Name" type="text" id="firstName" name="first_name"/>
        </div>

        <div className="field input-field"  htmlFor="lastName">
        <input className="inputs" placeholder="Last Name" type="text" id="lastName" name="last_name"/>
        </div>

        <div className="field input-field"  htmlFor="email">
        <input className="inputs" placeholder="Email" type="email" id="email" name="email"/>
        </div>

        <div className="field input-field"  htmlFor="password">
        <input className="inputs" placeholder="Password" type="password" id="password" name="password"/>
        </div>

        <div className="field input-field"  htmlFor="image">
        <input className="inputs" placeholder="Image URL" type="text" id="image" name="img"/>
        </div>

        <div className="field input-field"  htmlFor="image">
        <input id="submit" type="submit" value="Sign up"/>
        </div>
      </form>
      <Link to="/">Back to home</Link>
    </div>
    </div>
  );
}

export default SignUpModal;
