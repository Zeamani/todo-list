import { observer } from 'mobx-react-lite';
import React, { useState } from 'react';
import todo from '../store/todo';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const CreatorTodo = observer(() => {
    const [textTask, setTextTask] = useState('');

    return (
        <div className="todo-creator">
            <form onSubmit={e => e.preventDefault()}>
                <input 
                    type='text' 
                    value={textTask}
                    onChange={e => setTextTask(e.currentTarget.value)}
                    className="todo-creator__text"
                    placeholder="Task name"
                />
                {textTask && 
                    <button 
                        className="todo-creator__button" 
                        onClick={() => {
                            textTask && todo.addTodo(textTask);
                            setTextTask('');
                        }}
                    >
                        <FontAwesomeIcon icon={faPlus} />
                    </button>
                }
            </form>
        </div>
    );
});

export default CreatorTodo;