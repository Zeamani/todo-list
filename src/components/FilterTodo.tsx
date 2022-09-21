import { observer } from 'mobx-react-lite';
import React from 'react';
import todo from '../store/todo';
import { faList, faCheckDouble, faHourglass, faCheck, faListCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const FilterTodo = observer(() => {
    return (
        <div className="todo-filter">
            <input id="todo-filter__all" name="todo-filter" type="radio" checked={todo.filter === null} onChange={() => todo.setFilter(null)} />
            <label id="todo-filter__all_label" htmlFor="todo-filter__all"><FontAwesomeIcon icon={faListCheck} /></label>
            <input id="todo-filter__done" name="todo-filter" type="radio" checked={todo.filter === 1} onChange={() => todo.setFilter(1)} />
            <label id="todo-filter__done_label" htmlFor="todo-filter__done"><FontAwesomeIcon icon={faCheck} /></label>
            <input id="todo-filter__wait" name="todo-filter" type="radio" checked={todo.filter === 2} onChange={() => todo.setFilter(2)} />
            <label id="todo-filter__wait_label" htmlFor="todo-filter__wait"><FontAwesomeIcon icon={faHourglass} /></label>
        </div>
    );
});

export default FilterTodo;