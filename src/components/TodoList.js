import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggle, deleteTodo } from "../redux/todosSlice";

const TodoList = () => {
  const dispatch = useDispatch();
  const { todos, activeFilter } = useSelector((state) => state.todos);

  const handleDestroy = (id) => {
    if (window.confirm("Are you sure?")) {
      dispatch(deleteTodo(id));
    }
  };

  let filtered = todos;

  if (activeFilter !== "all") {
    filtered = todos.filter((todo) =>
      activeFilter === "completed" ? todo.completed : !todo.completed
    );
  }

  // if (activeFilter !== "all") {
  //   filtered = todos.filter(
  //     (todo) => todo.completed === (activeFilter === "completed")
  //   );
  // }

  // switch (activeFilter) {
  //   case "all":
  //     filtered = todos;
  //     break;
  //   case "active":
  //     filtered = todos.filter((todo) => todo.completed === false);
  //     break;
  //   case "completed":
  //     filtered = todos.filter((todo) => todo.completed === true);
  //     break;
  //   default:
  //     filtered = todos;
  // }

  return (
    <ul className="todo-list">
      {filtered.map((todo) => (
        <li key={todo.id} className={todo.completed ? "completed" : ""}>
          <div className="view">
            <input
              className="toggle"
              type="checkbox"
              checked={todo.completed}
              onChange={() => dispatch(toggle(todo.id))}
            />
            <label>{todo.text}</label>
            <button
              className="destroy"
              onClick={() => handleDestroy(todo.id)}
            ></button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
