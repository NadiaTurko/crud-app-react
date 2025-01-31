import React, { useEffect } from "react";
import "./style.sass";
import {
  FILTER_TODO_ALL,
  FILTER_TODO_COMPLETED,
  FILTER_TODO_PROGRESS,
} from "../../../constants/todoConstants";
import useLocalStorage from "../../../hooks/useLocalStorage";

export default function TodoFilter({ liftingFilter }) {
  const [filter, setFilter] = useLocalStorage(`filter`, FILTER_TODO_ALL);
  const handleFilter = (e) => setFilter(e.target.value);

  useEffect(() => {
    liftingFilter(filter);
  }, [filter]);

  useEffect(() => {
    localStorage.setItem(`filter`, JSON.stringify(filter));
  }, [filter]);
  return (
    <div className="todo_filter ">
      <label>
        Filter todos:{" "}
        <select defaultValue={filter} onChange={handleFilter}>
          <option value={FILTER_TODO_ALL}>all</option>
          <option value={FILTER_TODO_COMPLETED}>completed</option>
          <option value={FILTER_TODO_PROGRESS}>progress</option>
        </select>
      </label>
    </div>
  );
}
