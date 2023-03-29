import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
function Account({ entire }) {
    const navigate = useNavigate();
    function handleDelete(){
        fetch(`/api/deleteuser/${entire.pk}/`, {
            method: 'DELETE',
        })
        .then(navigate('/'))
    }

  return (
    <div>
    <Link to='/messages/1'>Back</Link>
      <h2>Account Details</h2>
      <div>
        <label>First Name:</label>
        <span>{entire.fields.first_name}</span>
      </div>
      <div>
        <label>Last Name:</label>
        <span>{entire.fields.last_name}</span>
      </div>
      <div>
        <label>Email:</label>
        <span>{entire.fields.email}</span>
      </div>
      <div>
        <label>Profile Image:</label>
        <img src={entire.fields.img} alt="Profile Image" />
      </div>
      <button onClick={handleDelete} style={{ backgroundColor: 'red', color: 'white', marginTop: '20px' }}>Delete Account</button>
    </div>
  );
}

export default Account;
