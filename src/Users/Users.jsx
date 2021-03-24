import React from "react";

const Users = props => {
    const userItem = [
  { firstName: "John", lastName: "Mnemonic", age: 22 },
  { firstName: "Ivar", lastName: "Boneless", age: 21 },
  { firstName: "Bjorn", lastName: "Ironside", age: 28 },
  { firstName: "Ragnar", lastName: "Lodbrock", age: 49 },
  { firstName: "Floki", lastName: "Unknown", age: 52 }
];
  
    return (
      <ul>
        {userItem.map(item => (
          <li>{item.firstName + '  ' + item.lastName + '  ' + item.age}</li>
        ))}
      </ul>
    );
  };
  export default Users;