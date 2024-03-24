import style from './TodoListItem.module.css';
import { Text } from '..';
import { RiDeleteBinLine } from 'react-icons/ri';

export const TodoListItem = ({ todo, index, onDelete }) => {
  const handleClick = () => {
    onDelete(todo.id);
  };
  return (
    <div className={style.box}>
      <Text textAlign="center" marginBottom="20">
        toDo # {index + 1}
      </Text>
      <Text>{todo.text}</Text>
      <button
        onClick={handleClick}
        className={style.deleteButton}
        type="button"
      >
        <RiDeleteBinLine size={24} />
      </button>
    </div>
  );
};
