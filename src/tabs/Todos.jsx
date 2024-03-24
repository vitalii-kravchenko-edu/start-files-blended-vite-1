import { Text, TodoList } from 'components';
import { Form } from 'components';
import { nanoid } from 'nanoid';
import { useEffect, useState } from 'react';

export const Todos = () => {
  const [todos, setTodos] = useState(() => {
    const data = localStorage.getItem('todos');
    if (!data) return [];
    return JSON.parse(data);
  });
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);
  const handleDelete = id => {
    setTodos(prev => prev.filter(item => item.id !== id));
  };
  const handleSubmit = todoValue => {
    const todo = {
      id: nanoid(),
      text: todoValue,
    };
    setTodos(prevState => {
      return [...prevState, todo];
    });
  };
  return (
    <div>
      {' '}
      <Form onSubmit={handleSubmit}></Form>
      <Text textAlign="center">There are no any todos ...</Text>
      <TodoList todos={todos} onDelete={handleDelete} />
    </div>
  );
};
