import { observer } from 'mobx-react-lite';
import todo from '../store/todo';
import TodoItem from './TodoItem';

const TodoList = observer(() => {
    return (
        <div className='todo-list'>
            {todo.filteredTodos.length 
            ?   todo.filteredTodos.map(t => 
                    <TodoItem 
                        key={t.id} 
                        title={t.title} 
                        completed={t.completed} 
                        removeFunc={todo.removeTodo.bind(todo, t.id)}
                        toggleFunc={todo.toggleTodo.bind(todo, t.id)}
                        idTodo={t.id} 
                />
                )
            :   <span>...</span> 
            }
        </div>
    );
});

export default TodoList;