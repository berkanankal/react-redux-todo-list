import { createSlice, nanoid } from "@reduxjs/toolkit";

export const todosSlice = createSlice({
  name: "todos",
  initialState: {
    todos: [
      { id: "1", text: "Learn JavaScript", completed: true },
      { id: "2", text: "Learn React", completed: false },
      { id: "3", text: "Have a life!", completed: false },
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
  },
});

export const { addTodo } = todosSlice.actions;
export default todosSlice.reducer;
