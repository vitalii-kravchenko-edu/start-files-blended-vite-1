import { createSlice } from '@reduxjs/toolkit';
const intState = { items: [], currentTodo: null };
const todos = createSlice({
  name: 'todos',
  initialState: intState,
  reducers: {
    addTodo: (state, action) => {
      state.items.push(action.payload);
    },
    deleteTodo: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload);
    },
    setCurrentTodo: (state, action) => {
      state.currentTodo = action.payload;
    },
    updateToDo: (state, action) => {
      state.items = state.items.map(item => {
        return item.id === state.currentTodo.id
          ? { text: action.payload, id: state.currentTodo.id }
          : item;
      });
    },
  },
});
export const { addTodo, deleteTodo, setCurrentTodo, updateToDo } =
  todos.actions;
export const todosReducer = todos.reducer;
