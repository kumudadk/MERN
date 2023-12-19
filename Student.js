import React from "react";

function Student({ students }) {
  return (
    <>
      <h2>Props with array of objects</h2>

      {students.map((std) => (
        <li>
          {std.id},{std.name},{std.gender}
        </li>
      ))}
    </>
  );
}

export default Student;
