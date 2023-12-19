import React from "react";

function Greet(props) {
  // props : {
  //     name : "peter"
  // }

  return (
    <div>
      <h1>Welcome {props.name} </h1>
      <h2>Age is {props.age}</h2>
      <h2>Admin status : {props.isAdmin ? "Admin(yes)" : "Guest(No)"}</h2>
    </div>
  );
}

// props : {
//     name : "peter"
// }

// props here is immutable

// props = {
//     name:'asdas'
// }

export default Greet;
