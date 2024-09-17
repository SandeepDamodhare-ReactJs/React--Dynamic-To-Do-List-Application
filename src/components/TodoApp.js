
import React, { useState, useEffect } from "react";
import AddTodo from "./AddTodo";
import TodoList from "./TodoList";
import Filter from "./Filter";

const TodoApp = () => {

  const [todos, setTodos] = useState(() => {

    const savedTodos = localStorage.getItem("todos");
    return savedTodos ? JSON.parse(savedTodos) : [];
  });


  useEffect(() => {
    if (todos.length > 0) {
  localStorage.setItem("todos", JSON.stringify(todos));
    }
  }, [todos]);


  const addTodo = (task) => {
    const newTodo = { id: Date.now(), task, completed: false };
    setTodos([...todos, newTodo]);
  };


  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>

        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };


  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };


  const [filter, setFilter] = useState("all");


  const filteredTodos = todos.filter((todo) => {
    if (filter === "completed") return todo.completed;
    if (filter === "pending") return !todo.completed;

    return true;
  });

  return (
    <div >
      <h1>To-Do List</h1>
      <AddTodo addTodo={addTodo} />


  <Filter setFilter={setFilter} />
  
      <TodoList
        todos={filteredTodos}
        toggleComplete={toggleComplete}
        deleteTodo={deleteTodo}
      />
    </div>
  );
};

export default TodoApp;
