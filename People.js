import React, { useState } from "react";

function People() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("Peter");
  const [role, setRole] = useState(false);

  const handleCount = () => {
    setCount(count + 1);
  };

  const handleCount5 = () => {
    for (let i = 0; i < 5; i++) {
      // setCount(count + 1);

      console.log(count);

      setCount((prevCount) => prevCount + 1);
    }
  };

  const handleName = () => {
    setName("Parker");
  };

  const handleRole = () => {
    setRole(!role);
  };

  return (
    <div className="App">
      <h1>{name}</h1>
      <button onClick={handleName}>Change</button>

      <h1>{count}</h1>
      <button onClick={handleCount}>Increment</button>

      <button onClick={handleCount5}>IncrementBy5</button>

      <h1>{role ? "Admin" : "Guest"}</h1>
      <button onClick={handleRole}>Change Role</button>
    </div>
  );
}

export default People;
