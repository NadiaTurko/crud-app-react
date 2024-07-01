import React, { useEffect, useCallback } from "react";
import { TODO_COLOR } from "../../../constants/todoConstants";
import useLocalStorage from "../../../hooks/useLocalStorage";
import "./style.sass";

export default function TodoColorPicker({ liftingColor }) {
  const [color, setColor] = useLocalStorage(`color`, TODO_COLOR);

  const handleChange = (e) => setColor(e.target.value);

  useEffect(() => {
    liftingColor(color);
  }, [color]);

  const colorTitle = useCallback(() => {
    return <h3>Color: {color}</h3>;
  }, [color]);
  return (
    <div className="todo_colorPicker">
      {colorTitle()}
      <label>
        Select color:{" "}
        <input type="color" defaultValue={color} onChange={handleChange} />
      </label>
    </div>
  );
}
