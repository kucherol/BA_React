import React from "react";


const Navigation = (props) => {
  
  return (
    <ul>
      {props.list.map((item) => (
        <li><a href={item}>{item}</a></li>
      ))}
    </ul>
  );
  };

export default Navigation;
