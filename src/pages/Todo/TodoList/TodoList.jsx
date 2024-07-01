import React, { useState, useMemo } from "react";
import { useEffect } from "react";
import {
  getTodo,
  changeTodoItem,
  deleteTodoItem,
} from "../../../services/todoService";
import TodoListItem from "../../../components/TodoListItem/TodoListItem";
import {
  FILTER_TODO_PROGRESS,
  FILTER_TODO_COMPLETED,
  FILTER_TODO_ALL,
} from "../../../constants/todoConstants";

export default function TodoList({ newTodo, filter, color, liftingList }) {
  const [list, setList] = useState([]);
  const [filterList, setFilterList] = useState([]);

  // const [sortedList, setSortedList] = useState([]);

  // const sortedList = filterList.sort((a, b) => b.rating - a.rating);
  const sortedList = useMemo(() => {
    return filterList.sort((a, b) => b.rating - a.rating);
  }, [filterList]);

  useEffect(() => {
    (async () => {
      try {
        // let request = await fetch(
        //     `https://64f84d3c824680fd217f6300.mockapi.io/list`
        //   ),
        //   response = await request.json();
        // setList(response);
        setList(await getTodo());
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);

  useEffect(() => {
    setFilterList(list);
    liftingList(list);
  }, [list]);

  useEffect(() => {
    Object.keys(newTodo).length &&
      setList((prevState) => [...prevState, newTodo]);
  }, [newTodo]);

  useEffect(() => {
    switch (filter) {
      case FILTER_TODO_COMPLETED:
        setFilterList(list.filter((item) => item.completed));
        break;
      case FILTER_TODO_PROGRESS:
        setFilterList(list.filter((item) => !item.completed));
        break;
      default:
        setFilterList(list);
    }
  }, [filter, list]);

  // useEffect(() => {
  //   setSortedList(filterList.sort((a, b) => b.rating - a.rating));
  // }, [filterList]);

  const handleItemCompleted = (item) => {
    (async () => {
      // let request = await fetch(
      //     `https://64f84d3c824680fd217f6300.mockapi.io/list/${item.id}`,
      //     {
      //       method: "PUT",
      //       headers: {
      //         "Content-type": "application/json",
      //       },
      //       body: JSON.stringify({ completed: !item.completed }),
      //     }
      //   ),
      // response = await request.json();
      const changedItem = await changeTodoItem(item.id, {
        completed: !item.completed,
      });

      setList((prevState) =>
        prevState.map((element) => {
          if (element.id === item.id) element = changedItem;
          return element;
        })
      );
    })();
  };

  const handleItemDelete = (e, id) => {
    e.stopPropagation();
    (async () => {
      try {
        await deleteTodoItem(id);
        setList((prevState) => prevState.filter((item) => item.id !== id));
      } catch (err) {
        console.log(err);
      }
    })();
  };

  return list.length ? (
    <ul style={{ color }}>
      {sortedList.map((item, index) => (
        <TodoListItem
          key={index}
          item={item}
          handleItemCompleted={handleItemCompleted}
          handleItemDelete={handleItemDelete}
        />
      ))}
    </ul>
  ) : null;
}
