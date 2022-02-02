import React from "react";
import { useSelector } from "react-redux";

const TodoList = () => {
  const { todos } = useSelector((state) => state.todos);

  return (
    <ul className="todo-list">
      {todos.map((todo) => (
        <li key={todo.id} className={todo.completed ? "completed" : ""}>
          <div className="view">
            <input className="toggle" type="checkbox" />
            <label>{todo.text}</label>
            <button className="destroy"></button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
