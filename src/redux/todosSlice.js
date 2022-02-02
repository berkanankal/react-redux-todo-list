import { createSlice, nanoid } from "@reduxjs/toolkit";

export const todosSlice = createSlice({
  name: "todos",
  initialState: {
    todos: [
      { id: nanoid(), text: "Learn JavaScript", completed: true },
      { id: nanoid(), text: "Learn React", completed: false },
      { id: nanoid(), text: "Have a life!", completed: false },
    ],
  },
  reducers: {
    addTodo: (state, action) => {
      state.todos.push({
        id: nanoid(),
        text: action.payload,
        completed: false,
      });
    },
    toggle: (state, action) => {
      const todo = state.todos.find((t) => t.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
    deleteTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
  },
});

export const { addTodo, toggle, deleteTodo } = todosSlice.actions;
export default todosSlice.reducer;
