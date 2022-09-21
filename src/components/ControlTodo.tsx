import React from 'react';
import CreatorTodo from './CreatorTodo';
import FilterTodo from './FilterTodo';

const ControlTodo = () => {
    return (
        <div className="todo-control">
            <CreatorTodo />
            <FilterTodo />
        </div>
    );
}

export default ControlTodo;