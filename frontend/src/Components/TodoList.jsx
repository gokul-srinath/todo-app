import React, { useEffect, useState } from "react";
import Todo from "./Todo";
import "./TodoList.css";

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [desc, setDesc] = useState("");

  async function getTodos() {
    const res = await fetch("http://localhost:8080/api/todo/");
    const { data } = await res.json();
    setTodos(data.todos);
  }

  useEffect(() => {
    getTodos();
  }, []);

  const setInpt = (e, setInput) => {
    setInput(e.target.value);
  };

  const addTodo = async (e) => {
    console.log("triggered");
    setLoading(true);
    const res = await fetch("http://localhost:8080/api/todo/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ desc }),
    });
    console.log(await res.json());
    setLoading(false);
  };

  return (
    <div className="template">
      <h2>Todo List:</h2>
      <div className="form">
        <form>
          <input
            type="text"
            value={desc}
            placeholder="type here"
            onChange={(e) => setInpt(e, setDesc)}
          />
          <button
            className="button"
            style={{
              border: "1px solid",
              backgroundColor: "rgb(28, 106, 239)",
              margin: "2px",
              padding: "2px 1rem",
              color: "white",
              borderRadius: "5px",
            }}
            onClick={(e) => addTodo(e)}
          >
            Add
          </button>
        </form>
      </div>
      <div className="todo-list">
        {loading
          ? "Loading"
          : todos &&
            todos.map((todo, inx) => (
              <Todo
                key={todo._id}
                id={todo._id}
                desc={todo.desc}
                completed={todo.completed || false}
              />
            ))}
      </div>
    </div>
  );
};

export default TodoList;
