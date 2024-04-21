import { FiSearch } from 'react-icons/fi';

import style from './Form.module.css';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
import { addTodo } from 'reduxTodo/todosSlice';

export const Form = () => {
  const [value, setValue] = useState('');
  const dispatch = useDispatch();
  const handleInputChange = evt => {
    setValue(evt.target.value);
  };
  const handleSubmit = evt => {
    evt.preventDefault();
    const todoTask = {
      id: nanoid(),
      text: value,
    };
    dispatch(addTodo(todoTask));
    setValue('');
  };

  return (
    <form onSubmit={handleSubmit} className={style.form}>
      <button className={style.button} type="submit">
        <FiSearch size="16px" />
      </button>

      <input
        onChange={handleInputChange}
        value={value}
        className={style.input}
        placeholder="What do you want to write?"
        name="search"
        required
        autoFocus
      />
    </form>
  );
};
