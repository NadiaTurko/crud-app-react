import React, { useState } from "react";
import TodoList from "./TodoList/TodoList";
import TodoForm from "./TodoForm/TodoForm";
import TodoFilter from "./TodoFilter/TodoFilter";
import TodoColorPicker from "./TodoColorPicker/TodoColorPicker";
import TodoStatistics from "./TodoStatistics/TodoStatistics";

export default function Todo() {
  const [newTodo, setNewTodo] = useState({});
  const [filter, setFilter] = useState();
  const [color, setColor] = useState();
  const [list, setList] = useState();

  // const getNewTodo = (value) => setNewTodo(value);
  return (
    <>
      <TodoForm liftingNewTodo={setNewTodo} />
      <TodoFilter liftingFilter={setFilter} />
      <TodoStatistics list={list} />
      <TodoColorPicker liftingColor={setColor} />
      <TodoList
        newTodo={newTodo}
        filter={filter}
        color={color}
        liftingList={setList}
      />
    </>
  );
}
