import { Draggable, Droppable } from '@hello-pangea/dnd';
import { ITodo } from '../../interfaces/todo.interface';
import TodoItem from '../todoItem/TodoItem';

interface TodoListProps {
  todos: ITodo[];
  setTodo: React.Dispatch<React.SetStateAction<ITodo[]>>;
}

const TodoList: React.FC<TodoListProps> = ({ todos, setTodo }) => {
  return (
    <Droppable droppableId='todos'>
      {(droppableProvider) => (
        <div
          className='bg-white dark:bg-gray-900 overflow-hidden rounded-t-md mt-8'
          ref={droppableProvider.innerRef}
          {...droppableProvider.droppableProps}
        >
          {todos.map((todo, index) => (
            <Draggable key={todo.id} index={index} draggableId={`${todo.id}`}>
              {(draggableProvider) => (
                <TodoItem
                  todo={todo}
                  setTodo={setTodo}
                  ref={draggableProvider.innerRef}
                  draggableProps={draggableProvider.draggableProps}
                  dragHandleProps={draggableProvider.dragHandleProps}
                />
              )}
            </Draggable>
          ))}
          {droppableProvider.placeholder}
        </div>
      )}
    </Droppable>
  );
};

export default TodoList;
