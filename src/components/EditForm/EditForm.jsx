import { RiSaveLine } from 'react-icons/ri';
import { MdOutlineCancel } from 'react-icons/md';

import style from './EditForm.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectCurrentTodo } from 'reduxTodo/selectors';
import { setCurrentTodo, updateToDo } from 'reduxTodo/todosSlice';

export const EditForm = () => {
  const selectTodo = useSelector(selectCurrentTodo);
  const dispatch = useDispatch();
  const handleSubmit = evt => {
    evt.preventDefault();
    dispatch(updateToDo(evt.target.elements.text.value));
    dispatch(setCurrentTodo(null));
  };
  return (
    <form onSubmit={handleSubmit} className={style.form}>
      <input
        className={style.input}
        placeholder="What do you want to write?"
        name="text"
        required
        defaultValue={selectTodo.text}
        autoFocus
      />
      <button className={style.submitButton} type="submit">
        <RiSaveLine color="green" size="16px" />
      </button>

      <button
        onClick={() => dispatch(setCurrentTodo(null))}
        className={style.editButton}
        type="button"
      >
        <MdOutlineCancel color="red" size="16px" />
      </button>
    </form>
  );
};
