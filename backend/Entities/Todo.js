class Todo {
    id;
    desc;
    completed;

    constructor(id,desc="") {
        this.id = id;
        this.desc = desc;
        this.completed = false;
    }

    markCompleted() {
        this.completed = true;
      }

    setTodo(desc,completed) {
        this.desc = desc;
        this.completed = completed;
    }

    getDesc() {
        return this.desc;
    }

    getCompleted() {
        return this.completed;
    }




}

module.exports = Todo;