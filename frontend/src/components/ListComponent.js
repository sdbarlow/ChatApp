import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../Styles/ListComponent.css'

const ListComponent = ({ loggedinuser, users, convos }) => {

console.log(convos)

  return (
    <div id="list-container">
      <ul>
        {users && users.length > 0 && users.map(user => {
          const userPk = user.pk;
          const userIsLoggedInUser = userPk === loggedinuser;
          const userIsInConversation = convos.some(convo =>
            convo.fields.sender === userPk || convo.fields.receiver === userPk
          );
          if (!userIsLoggedInUser && userIsInConversation) {
            return (
              <li key={userPk}>
                <Link to={`/messages/${userPk}`}>
                  <div className="user-card">
                    <div className="user-img">
                      <img src={user.fields.img} alt={`${user.fields.first_name} ${user.fields.last_name}`} />
                    </div>
                    <div className="user-info">
                      <h3>{`${user.fields.first_name} ${user.fields.last_name}`}</h3>
                      <p>{convos
                          .filter((convo) => (
                            (convo.fields.sender == userPk && convo.fields.receiver == loggedinuser) ||
                            (convo.fields.sender == loggedinuser && convo.fields.receiver == userPk)
                          ))
                          .sort((a, b) => (a.pk > b.pk) ? -1 : 1)
                          .map((convo) => convo.fields.convo)
                          .slice(0, 1)
                        }</p>
                    </div>
                  </div>
                </Link>
              </li>
            );
          }
          return null;
        })}
      </ul>
    </div>
  );
}

export default ListComponent;
