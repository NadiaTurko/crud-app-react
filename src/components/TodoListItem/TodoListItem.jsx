import React from "react";
import { ITEM_COMPLETED, ITEM_PROGRESS } from "../../constants/todoConstants";
import "./style.sass";
import Button from "../Button/Button";

export default function TodoListItem({
  item,
  handleItemCompleted,
  handleItemDelete,
}) {
  const itemClasses = (item) => {
    const classes = [];
    classes.push(item.completed ? ITEM_COMPLETED : ITEM_PROGRESS);
    return classes.join(" ");
  };
  return (
    <li className={itemClasses(item)} onClick={() => handleItemCompleted(item)}>
      <strong>{item.rating}</strong> {item.title}{" "}
      <Button
        title="Delete"
        actionOnClick={(e) => handleItemDelete(e, item.id)}
      />
    </li>
  );
}
