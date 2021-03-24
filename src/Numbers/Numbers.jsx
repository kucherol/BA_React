import React from "react";

const Numbers = ({ from, to, oddEven }) => {
    const b = from;
    const e = to;
    let arr = [];

    for (let i = b; i <= e; i++) {
        if (oddEven == "even" && i % 2 == 0) {
            arr.push(<li>{i}</li>);
        } else if (oddEven == "odd" && i % 3 == 0) {
            arr.push(<li>{i}</li>);
        } 
    }
    return <ul>{arr}</ul>;  
  };

  export default Numbers;