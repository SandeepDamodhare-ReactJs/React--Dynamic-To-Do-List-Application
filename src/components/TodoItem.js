
import React from "react";

const TodoItem = ({ todo, toggleComplete, deleteTodo }) => {
  return (
    <li>
      <span
        style={{
          textDecoration: todo.completed ? "line-through" : "none",
   cursor: "pointer",
        }}
        onClick={() => toggleComplete(todo.id)}
      >
        {todo.task}
      </span>
      <button onClick={() => deleteTodo(todo.id)}>Delete</button>
    </li>
  );
};

export default TodoItem;
