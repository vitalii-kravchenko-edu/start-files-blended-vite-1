import { Section, Container, Header, Text, Form, TodoList } from 'components';

export const App = () => {
  return (
    <>
      <Header />
      <Section>
        <Container>
          <Form />
          <TodoList />
        </Container>
      </Section>
    </>
  );
};
