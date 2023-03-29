import { Link, useNavigate } from "react-router-dom";


function SignUpModal() {
  const navigate = useNavigate();
  const handleSubmit = async (event) => {
    event.preventDefault();
  
    const formData = new FormData();
    formData.append("first_name", event.target.elements.first_name.value);
    formData.append("last_name", event.target.elements.last_name.value);
    formData.append("email", event.target.elements.email.value);
    formData.append("password", event.target.elements.password.value);
    formData.append("img", event.target.elements.img.value);
  
    try {
      const response = await fetch('/api/adduser/', {
        method: 'POST',
        body: formData,
      });
  
      // Check if the response was successful
      if (response.ok) {
        console.log('User created successfully');
      } else {
        console.error('Error:', response.status);
      }
    } catch (error) {
      console.error('Error:', error);
    }

    navigate('/');

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
