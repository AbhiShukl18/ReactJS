import React, { useState } from "react";

const Todo = () => {
  const [todo, setTodo] = useState("");   //single todo
  const [allTodos, setAllTodos] = useState([]);  // store todo in array
  console.log(allTodos, "allTodos");
  function handleChange(event) {
    setTodo(event.target.value);   //handling input field
  }
  function handleSubmit() {
    setAllTodos([...allTodos, todo]);  // handling submit button using spread(...)
    setTodo("");
  }
  function deleteTodo(index) {
    alert("Are u sure want to delete?")
    const newarray=[...allTodos];
    newarray.splice(index,1);
    setAllTodos(newarray);

  }
  return (
    <div>
      <h1>Todo</h1>
      <input value={todo} onChange={handleChange} />
      <br />
      <button onClick={handleSubmit}>Submit Todo.</button>
      <h1>All Todos.</h1>
      {allTodos.map((todo, i) => (
        <div
          key={i}
          style={{
            display: "flex",
            width: "50%",
            margin: "auto",
            justifyContent: "space-around",
            marginBottom: "20px"
          }}
        >
          <p>
            {" "}
            {i + 1}. {todo}
          </p>
          <button onClick={() => deleteTodo(i)}>Delete.</button>
        </div>
      ))}
    </div>
  );
};

export default Todo;