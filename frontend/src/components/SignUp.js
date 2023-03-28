import { Link } from "react-router-dom";

function SignUpModal() {
  return (
    <div>
      <h2>Sign up</h2>
      <form>
        <input type="text"/>
        <input type="text"/>
        <input type="submit"/>
      </form>
      <Link to="/">Back to home</Link>
    </div>
  );
}

export default SignUpModal;
