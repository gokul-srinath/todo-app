const chai = require("chai");
const TodoList = require("../Entities/TodoList");

const expect = chai.expect;

describe("TodoList", () => {
  let todoList;

  beforeEach(() => {
    todoList = new TodoList();
  });

  it("should add a todo", () => {
    const todo = todoList.addTodo("Buy Groceries");
    expect(todo.getDesc()).to.equal("Buy Groceries");
    expect(todo.getCompleted()).to.be.false;
  });

  it('should mark a todo as completed', () => {
    const todo = todoList.addTodo('Buy groceries');
    todoList.markTodoCompleted(todo);
    expect(todo.getCompleted()).to.be.true;
  });



  it('should get all todos', () => {
    todoList.addTodo('Buy groceries');
    todoList.addTodo('Walk the dog');
    const todos = todoList.getAllTodos();
    // const todos = todoList.getAllTodos();
    
    expect(todos).to.have.lengthOf(2);
  });

  

});
