import React from "react";
import ContentFooter from "../components/ContentFooter";
import TodoList from "../components/TodoList";
import { useDispatch, useSelector } from "react-redux";
import { toggleAll } from "../redux/todosSlice";

const Content = () => {
  const dispatch = useDispatch();
  const { todos } = useSelector((state) => state.todos);
  return (
    <>
      <section className="main">
        <input
          className="toggle-all"
          type="checkbox"
          checked={todos.filter((todo) => !todo.completed).length === 0}
          onChange={() => dispatch(toggleAll())}
        />
        <label
          htmlFor="toggle-all"
          onClick={() => dispatch(toggleAll())}
          style={{ display: todos.length ? "block" : "none" }}
        >
          Mark all as complete
        </label>

        <TodoList />
      </section>

      <ContentFooter />
    </>
  );
};

export default Content;
