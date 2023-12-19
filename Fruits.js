//rafce or rfce

import React from "react";

const Fruits = ({ fruits }) => {
  return (
    <div>
      {fruits.map((item) => (
        <h4>{item}</h4>
      ))}
    </div>
  );
};

export default Fruits;
