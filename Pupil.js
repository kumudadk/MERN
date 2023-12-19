import React from "react";

const Pupil = (props) => {
  let { email, fullname } = props.personInfo;

  return (
    <div>
      <h2>Props with single object</h2>
      {email},{fullname}
    </div>
  );
};

export default Pupil;
