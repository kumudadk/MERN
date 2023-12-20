import React, { useState } from "react";

function TodoMain() {
  const [username, setUsername] = useState("Peter");
  const [showCompleted, setShowCompleted] = useState(false);
  const [todoItems, setTodoItems] = useState([
    { action: "Buy Flowers", done: false },
    { action: "Walk the Dog", done: false },
    { action: "Collect Tickets", done: false },
    { action: "Meeting at 5", done: false },
  ]);
  const [newTodo, setNewTodo] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const toggleTodo = (item) => {
    setTodoItems((prevTodoItems) =>
      prevTodoItems.map((todo) =>
        todo.action === item.action ? { ...todo, done: !todo.done } : todo
      )
    );
  };

  const todoTableRows = (done) => {
    const filteredTodoItems = todoItems
      .filter((todo) => todo.done === done)
      .filter((todo) =>
        todo.action.toLowerCase().includes(searchTerm.toLowerCase())
      );

    return filteredTodoItems.map((item) => (
      <tr key={item.action}>
        <td>{item.action}</td>
        <td>
          <input
            type="checkbox"
            checked={item.done}
            onChange={() => toggleTodo(item)}
          />
        </td>
      </tr>
    ));
  };

  const addTodo = () => {
    const foundTodo = todoItems.find(
      (item) => item.action.toLowerCase() === newTodo.toLowerCase()
    );

    if (foundTodo) {
      alert("Oops already existed");
    } else {
      setTodoItems([...todoItems, { action: newTodo, done: false }]);
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <h4 className="bg-primary text-white text-center">
            {username}'s Todo List (
            {todoItems.filter((todo) => !todo.done).length} items to do)
          </h4>
        </div>
      </div>
      <div className="row mb-4">
        <div className="col-10">
          <input
            type="text"
            onChange={(event) => setNewTodo(event.target.value)}
          />
        </div>
        <div className="col-2">
          <button className="btn btn-sm btn-primary" onClick={addTodo}>
            Add Todo
          </button>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <label>
            <input
              type="checkbox"
              checked={showCompleted}
              onChange={() => setShowCompleted(!showCompleted)}
            />
            Show Completed
          </label>

          {/* Search Box */}
          <div className="mb-3">
            <input
              type="text"
              placeholder="Search..."
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <table className="table table-bordered">
            <thead>
              <tr>
                <th>Description</th>
                <th>Done</th>
              </tr>
            </thead>
            <tbody>{todoTableRows(false)}</tbody>
          </table>
          {showCompleted && (
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th>Description</th>
                  <th>Done</th>
                </tr>
              </thead>
              <tbody>{todoTableRows(true)}</tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
}

export default TodoMain;
