import React from "react";

const TodoItem = ({ todo, completed, onToggle }) => {
  return (
    <li className={`todo-item ${completed ? "completed" : ""}`}>
      <input type="checkbox" checked={completed} onChange={onToggle} />
      <span>{todo}</span>
    </li>
  );
};

export default TodoItem;
