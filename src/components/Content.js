import React from "react";
import ContentFooter from "../components/ContentFooter";
import TodoList from "../components/TodoList";

const Content = () => {
  return (
    <>
      <section className="main">
        <input className="toggle-all" type="checkbox" />
        <label htmlFor="toggle-all">Mark all as complete</label>

        <TodoList />
      </section>

      <ContentFooter />
    </>
  );
};

export default Content;
