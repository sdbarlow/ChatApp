import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';

const ListComponent = ({ loggedinuser }) => {
    const [convos, setConvos] = useState([])
    const [users, setUsers] = useState([])
    
    useEffect(() => {
        fetch('/api/conversations/')
        .then(resp => resp.json())
        .then(data => setConvos(data))
    }, [])

    useEffect(() => {
        fetch('/api/users/')
        .then(resp => resp.json())
        .then(data => setUsers(data))
    }, [])



    console.log(users)
  return (
    <div id="list-container">
      <ul>
        {users.map(user => (
            <li>
            <Link to={`/messages/${user.id}`}>{user.title}</Link>
          </li>
        ))}
        </ul>
    </div>
  );
};

export default ListComponent;