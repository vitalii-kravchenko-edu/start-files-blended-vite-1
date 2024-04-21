import { createSlice } from '@reduxjs/toolkit';

const todos = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    filterTodo: (state, action) => {
      return action.payload;
    },
  },
});
export const { filterTodo } = todos.actions;
export const filterReducer = todos.reducer;
