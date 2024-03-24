import { FiSearch } from 'react-icons/fi';
import style from './Form.module.css';
import { useState } from 'react';

export const Form = ({ onSubmit }) => {
  const [todoValue, setTodoValue] = useState('');
  const handleChange = e => {
    const message = e.target.value;
    setTodoValue(message);
  };
  const handleSubmit = event => {
    event.preventDefault();
    onSubmit(todoValue);
    setTodoValue('');
  };

  return (
    <form className={style.form} onSubmit={handleSubmit}>
      <button className={style.button} type="submit">
        <FiSearch size="16px" />
      </button>

      <input
        className={style.input}
        value={todoValue}
        onChange={handleChange}
        placeholder="What do you want to write?"
        name="search"
        required
        autoFocus
      />
    </form>
  );
};
