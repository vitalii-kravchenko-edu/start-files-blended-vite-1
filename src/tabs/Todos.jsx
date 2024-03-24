import { Text } from 'components';

import { Form } from 'components';
import { nanoid } from 'nanoid';
import { useState } from 'react';

export const Todos = () => {
  const [todos, setTodos] = useState([]);
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
      <Text textAlign="center">There are no any todos ...</Text>;
    </div>
  );
};
