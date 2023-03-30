import { Link, useNavigate } from "react-router-dom";


function SignUpModal({ submitFunction }) {
  const handleSubmit = async (event) => {
    event.preventDefault();
    submitFunction(event)
  };
  


  return (
    <div>
      <h2>Sign up</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="firstName">First Name</label>
        <input type="text" id="firstName" name="first_name"/>

        <label htmlFor="lastName">Last Name</label>
        <input type="text" id="lastName" name="last_name"/>

        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email"/>

        <label htmlFor="password">Password</label>
        <input type="password" id="password" name="password"/>

        <label htmlFor="image">Upload Image</label>
        <input type="text" id="image" name="img"/>

        <input type="submit" value="Sign up"/>
      </form>
      <Link to="/">Back to home</Link>
    </div>
  );
}

export default SignUpModal;
