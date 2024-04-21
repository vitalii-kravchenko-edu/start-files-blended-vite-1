import { GridItem, Text } from 'components';
import style from './Todo.module.css';
import { RiDeleteBinLine, RiEdit2Line } from 'react-icons/ri';
import { useDispatch } from 'react-redux';
import { deleteTodo, setCurrentTodo } from 'reduxTodo/todosSlice';

export const Todo = ({ todo, counter }) => {
  const dispatch = useDispatch();
  const deleteButton = () => {
    dispatch(deleteTodo(todo.id));
  };
  return (
    <GridItem>
      <div className={style.box}>
        <Text textAlign="center" marginBottom="20">
          TODO # {counter}
        </Text>

        <Text>{todo.text}</Text>
        <button
          onClick={deleteButton}
          className={style.deleteButton}
          type="button"
        >
          <RiDeleteBinLine size={24} />
        </button>
        <button
          onClick={() => dispatch(setCurrentTodo(todo))}
          className={style.editButton}
          type="button"
        >
          <RiEdit2Line size={24} />
        </button>
      </div>
    </GridItem>
  );
};
