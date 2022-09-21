import { makeAutoObservable } from "mobx";

interface TodoState {
    id: number,
    title: string,
    completed: boolean
} 

type FilterType = number | null;

class Todo {
    todos: TodoState[] = JSON.parse(localStorage.getItem('todos') as string) as TodoState[] || [];

    filter: FilterType = null;

    constructor() {
        makeAutoObservable(this);
    }

    removeTodo(id: number) {
        this.todos = this.todos.filter(todo => todo.id !== id);
        this.updateLocalStorage();
    }

    addTodo(title: string) {
        this.todos.push({ id: (this.todos[this.todos.length - 1]?.id || 0) + 1, title, completed: false });
        this.updateLocalStorage();
    }

    toggleTodo(id: number) {
        const toggleIndex = this.todos.findIndex(todo => todo.id === id);
        this.todos[toggleIndex].completed = !this.todos[toggleIndex].completed
        this.updateLocalStorage();
    }

    setFilter(filter: FilterType) {
        this.filter = filter;
    }

    updateLocalStorage() {
        localStorage.setItem('todos', JSON.stringify(this.todos));
    }

    get filteredTodos() {
        switch (this.filter) {
            case 1:
                return this.todos.filter(todo => todo.completed);

            case 2:
                return this.todos.filter(todo => !todo.completed);

            default:
                return this.todos;
        }
    } 
}

export default new Todo();