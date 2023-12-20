import React, { useState } from "react";

function Form() {
  const [loginDetails, setLoginDetails] = useState({
    username: "",
    password: "",
  });

  const handleLogin = () => {
    console.log(loginDetails);
  };

  const handleChange = (event) => {
    setLoginDetails({
      ...loginDetails,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <div>
      <p>
        <label>Username</label>
        {/* <input type="text" name='username' onChange={(event)=>setLoginDetails({...loginDetails,username:event.target.value})}/> */}
        <input type="username" name="username" onChange={handleChange} />
      </p>

      <p>
        <label>Password</label>
        {/* <input type="password" name="password"  onChange={(event)=>setLoginDetails({...loginDetails,password:event.target.value})} /> */}
        <input type="password" name="password" onChange={handleChange} />
      </p>

      <p>
        <button onClick={handleLogin}>Login</button>
      </p>
    </div>
  );
}

export default Form;
