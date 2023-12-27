import React from 'react';
import './UserList.css';


const UsersList = (props) => {
  return (
    <div>
         <ul>
        {props.users.map((user) => (
          <li key={user.id}>
            {user.name} ({user.age} years old)
          </li>
        ))}
      </ul>

    </div>

     
  );
};

export default UsersList;