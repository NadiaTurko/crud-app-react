import React, { useState, useRef } from "react";
import "./style.sass";
import { addTodoItem } from "../../../services/todoService";

export default function TodoForm({ liftingNewTodo }) {
  const [newTodo, setNewTodo] = useState({
    title: ``,
    completed: false,
  });

  const inputTitle = useRef();

  const handleTitle = (e) =>
    setNewTodo((prevState) => ({ ...prevState, title: e.target.value }));

  const handleCompleted = (e) =>
    setNewTodo((prevState) => ({ ...prevState, completed: e.target.checked }));

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newTodo.title) {
      inputTitle.current.focus();
      return;
    }
    (async () => {
      let addedTodo = await addTodoItem(newTodo);
      liftingNewTodo(addedTodo);
    })();
  };
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="todoTitle">
        Todo list:{" "}
        <input
          type="text"
          id="todoTitle"
          defaultValue={newTodo.title}
          onChange={handleTitle}
          ref={inputTitle}
        />
      </label>
      <label htmlFor="todoCompleted">
        Todo completed:{" "}
        <input
          type="checkbox"
          id="todoCompleted"
          defaultChecked={newTodo.completed}
          onChange={handleCompleted}
        />
      </label>
      <button>Add todo</button>
    </form>
  );
}
