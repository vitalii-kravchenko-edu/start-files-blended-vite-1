import { Grid, GridItem, TodoListItem } from '..';

export const TodoList = ({ todos, onDelete }) => {
  return (
    <Grid>
      {todos.map((item, index) => (
        <GridItem key={item.id}>
          <TodoListItem todo={item} index={index} onDelete={onDelete} />
        </GridItem>
      ))}
    </Grid>
  );
};
