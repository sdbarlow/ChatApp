import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const ListComponent = ({ loggedinuser }) => {
  const [convos, setConvos] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('/api/conversations/')
      .then(resp => resp.json())
      .then(data => setConvos(data))
  }, [])

  useEffect(() => {
    fetch('/api/users/')
      .then(resp => resp.json())
      .then(data => {setUsers(JSON.parse(data));
      })
  }, [])

  console.log(users);

  return (
    <div id="list-container">
      <ul>
        {users && users.length > 0 && users.map(user => (
          <li key={user.pk}>
            <Link to={`/messages/${user.pk}`}>{`${user.fields.first_name}  ${user.fields.last_name}`}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListComponent;
