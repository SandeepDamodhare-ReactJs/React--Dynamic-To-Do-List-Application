
import React, { useState } from "react";
import "../App.css";

const AddTodo = ({ addTodo }) => {
  const [task, setTask] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim()) {
      addTodo(task);
 setTask("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        className="add-task"
        type="text"
      value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Add a new task"
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default AddTodo;
