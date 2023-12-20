// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

//
//
//

// import "./App.css";
// import Greet from "./Greet";
// import Pupil from "./Pupil";
// import Fruits from "./Fruits";
// import Student from "./Student";

// function App() {
//   const personInfo = {
//     email: "abc@gmail.com",
//     fullname: "Peter Parker",
//   };

//   const fruits = ["apple", "mango", "Guava", "Orange"];

//   const studentDetails = [
//     { id: 1001, name: "Rose", gender: "Female" },
//     { id: 1002, name: "Peter", gender: "Male" },
//     { id: 1003, name: "John", gender: "Male" },
//     { id: 1004, name: "Kerry", gender: "Female" },
//   ];

//   return (
//     <>
//       <Greet name="Peter" age={23} isAdmin={true} />
//       <Pupil personInfo={personInfo} />
//       <Fruits fruits={fruits} />
//       <Student students={studentDetails} />
//     </>
//   );
// }

// export default App;
//
//
//
// App.js
//Another solution using props

// import React from "react";
// import MovieList from "./MovieList";

// const App = () => {
//   return (
//     <div>
//       <h1>Netflix Movie List</h1>
//       <MovieList />
//     </div>
//   );
// };

// export default App;
// For usestate hook use this for people.js

// import React from "react";
// import People from "./People";

// function App() {
//   return (
//     <div className="App">
//       <h1>My React App</h1>
//       <People />
//     </div>
//   );
// }

// export default App;

// import React from "react";
// import Form from "./Form";

// function App() {
//   return (
//     <div className="App">
//       <h1>My React App</h1>
//       <Form />
//     </div>
//   );
// }

// export default App;
import "./App.css";

import TodoMain from "./TodoMain";

function App() {
  return <TodoMain />;
}

export default App;
