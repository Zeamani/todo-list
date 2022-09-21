import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

interface TodoItemProps {
    title: string,
    completed: boolean,
    idTodo: number,
    removeFunc: () => void,
    toggleFunc: () => void
}

const TodoItem = ({
    title,
    completed,
    idTodo,
    removeFunc,
    toggleFunc
}: TodoItemProps) => {
    return (
        <div className='todo-item'>
            <div className='todo-item__complete-control'>
                <input 
                    type="checkbox" 
                    checked={completed}
                    onChange={toggleFunc}
                    className='todo-item__checkbox-inner'
                    id={"todo-item__checkbox_" + idTodo}
                />
                <label 
                    htmlFor={"todo-item__checkbox_" + idTodo}
                    className='todo-item__checkbox-wrap'
                >
                </label>
            </div>
            <span className='todo-item__title'>{title}</span>
            <FontAwesomeIcon 
                onClick={removeFunc} 
                className='todo-item__trash' 
                icon={faTrash} 
            />
        </div>
    );
}

export default TodoItem;