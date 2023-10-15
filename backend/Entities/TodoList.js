const Todo = require('./Todo');

class TodoList {

    #todos;
    static counter = 0;

    constructor(todos = []) {
        this.#todos = todos;
    }

    addTodo (desc) {
        // TodoList.counter+=1;
        const todo = new Todo(this.#todos.length+1,desc);
        this.#todos.push(todo); //db will be added shortly
        return todo;
    }


    getAllTodos () {
        
        return this.#todos;
    }

    getTodo(id) {
        return this.#todos.filter((todo) => todo.id == id);
    }

    markTodoCompleted(id) {
        const todo = this.#todos.filter((todo) => todo.id == id);
        todo.markCompleted();
    }

    updateTodo(id,desc,completed=false) {
        const todo = this.#todos.filter((todo) => todo.id == id)[0];
        todo.setTodo(desc,completed);
    }

    deleteTodo(id) {
        const todos = this.#todos.filter((todo) => todo.id != id);
        this.#todos = todos;
    }



}


module.exports = TodoList;