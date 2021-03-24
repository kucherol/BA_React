import React from "react";
import Users from '../Users';

const UsersList = props => {
    <Users />
    return (
        <ul>
          {userItem.map(item => (
            <li>{item.firstName + '  ' + item.lastName + '  ' + item.age}</li>
          ))}
        </ul>
      );
}

export default UsersList;