import { Text, Todo } from 'components';
import { useSelector } from 'react-redux';
import { selectTodos } from 'reduxTodo/selectors';

export const TodoList = () => {
  const selectItem = useSelector(selectTodos);
  console.log(selectItem);
  return (
    <>
      <ul>
        {selectItem.map((item, idx) => {
          return <Todo key={item.id} todo={item} counter={idx + 1} />;
        })}
      </ul>
    </>
  );
};
