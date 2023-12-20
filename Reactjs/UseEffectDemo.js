import React, { useEffect, useState } from "react";

function UseEffectDemo() {
  const [count, setCount] = useState();

  const [input, setInput] = useState();

  useEffect(() => {
    console.log("making an api call");
  }, []); //empty dependency array (only executed once)

  //   useEffect(() => {
  //     console.log("making an api call");
  //   }, [count]); //dependency array (only executed when count changes i.e dependent on count)

  const handleClick = () => {
    setCount((prev) => prev + 1);
  };

  return (
    <div className="container">
      <h1>Count : {count}</h1>

      <button onClick={handleClick}>Click</button>

      <input
        type="text"
        placeholder="enter name"
        onChange={(e) => setInput(e.target.value)}
      />
    </div>
  );
}

export default UseEffectDemo;
