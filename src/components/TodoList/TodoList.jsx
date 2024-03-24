import { Grid, GridItem, TodoListItem } from '..';

export const TodoList = ({ todos, onDelete, onEdit }) => {
  return (
    <Grid>
      {todos.map((item, index) => (
        <GridItem key={item.id}>
          <TodoListItem
            todo={item}
            index={index}
            onEdit={onEdit}
            onDelete={onDelete}
          />
        </GridItem>
      ))}
    </Grid>
  );
};
