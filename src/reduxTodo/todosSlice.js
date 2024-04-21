import { createSlice } from '@reduxjs/toolkit';
const intState = { items: [] };
const todos = createSlice({
  name: 'todos',
  initialState: intState,
  reducers: {
    addTodo: (state, action) => {
      state.items.push(action.payload);
    },
    deleteTodo: (state, action) => {
      state.items.filter(item => item.id !== action.payload);
    },
  },
});
export const { addTodo, deleteTodo } = todos.actions;
export const todosReducer = todos.reducer;
