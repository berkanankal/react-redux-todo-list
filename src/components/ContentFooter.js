import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { changeActiveFilter, clearCompleted } from "../redux/todosSlice";

const ContentFooter = () => {
  const dispatch = useDispatch();
  const { todos, activeFilter } = useSelector((state) => state.todos);
  const todosLeft = todos.filter((todo) => todo.completed === false).length;

  const handleClick = (filter) => {
    dispatch(changeActiveFilter(filter));
  };

  const handleClearCompleted = () => {
    if (window.confirm("Are you sure?")) {
      dispatch(clearCompleted());
    }
  };

  return (
    <footer
      className="footer"
      style={{ display: todos.length ? "block" : "none" }}
    >
      <span className="todo-count">
        <strong>{todosLeft}</strong> item{todosLeft > 1 ? "s" : ""} left
      </span>

      <ul className="filters">
        <li>
          <button
            className={activeFilter === "all" ? "selected" : ""}
            onClick={() => handleClick("all")}
          >
            All
          </button>
        </li>
        <li>
          <button
            className={activeFilter === "active" ? "selected" : ""}
            onClick={() => handleClick("active")}
          >
            Active
          </button>
        </li>
        <li>
          <button
            className={activeFilter === "completed" ? "selected" : ""}
            onClick={() => handleClick("completed")}
          >
            Completed
          </button>
        </li>
      </ul>

      <button className="clear-completed" onClick={handleClearCompleted}>
        Clear completed
      </button>
    </footer>
  );
};

export default ContentFooter;
