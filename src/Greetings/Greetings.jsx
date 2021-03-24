import React from "react";

const Greetings = (props) => {
    const date = new Date();
    const hour = date.getHours();
    
    if ( hour >= 3 && hour < 12) {
      const greetings = <p>"Good morning! {props.text}"</p>;
      return greetings;
    } else if ( hour >= 12 && hour < 18) {
      const greetings = <p>"Good afernoon! {props.text}"</p>;
      return greetings;
    } else if ( hour >= 18 && hour < 22) {
      const greetings = <p>"Good evening! {props.text}"</p>;
      return greetings;
    } else {
      const greetings = <p>"Good night! {props.text}"</p>;
      return greetings;
    }
  
  };

  export default Greetings;