import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/todosSlice";

const Form = () => {
  const [text, setText] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!text.trim()) {
      return;
    }

    dispatch(addTodo(text.trim()));
    setText("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        className="new-todo"
        placeholder="What needs to be done?"
        autoFocus
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
    </form>
  );
};

export default Form;
