import React, { useState } from "react";
import "./Todo.css";

const Todo = ({ id, desc, completed }) => {
  const [complete, setCompleted] = useState(completed);
  const [newDesc, setNewDesc] = useState(desc);
  const [edit, setEdit] = useState(false);

  async function updateTodo() {
    const res = await fetch(`http://localhost:8080/api/todo/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        desc: newDesc,
        completed: edit ? completed : !completed,
      }),
    }).then((res) => res.json());

    setCompleted( edit ? completed : !completed);
  }

  async function deleteTodo() {
    const res = await fetch(`http://localhost:8080/api/todo/${id}`, {
      method: "delete",
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => res.json());
  }

  const setInpt = (e, setInput) => {
    setInput(e.target.value);
  };

  return (
    <div
      className="todo"
      style={
        complete
          ? { backgroundColor: "lightgreen" }
          : { backgroundColor: "red" }
      }
    >
      <button
        className="button"
        onClick={() => setEdit(!edit)}
        style={{ right: "25%", position: "absolute", top: "5%" }}
      >
        <img
          width="20"
          height="20"
          src="https://img.icons8.com/ios-glyphs/30/000000/edit--v1.png"
          alt="edit--v1"
        />
      </button>
      <form>
        <button
          className="button"
          onClick={deleteTodo}
          style={{ right: "5%", position: "absolute", top: "5%" }}
        >
          <img
            width="20"
            height="20"
            src="https://img.icons8.com/material-rounded/24/000000/filled-trash.png"
            alt="filled-trash"
          />
        </button>
      </form>
      <div style={{ overflow: "hidden" }}>
        {!edit ? (
          <p>{newDesc}</p>
        ) : (
          <form>
            <input
              style={{ outline: "none", borderRadius: "5px", padding: "5px" }}
              type="text"
              value={newDesc}
              onChange={(e) => setInpt(e, setNewDesc)}
            />
            <button onClick={updateTodo}>ok</button>
          </form>
        )}
      </div>
      <div>{complete}</div>
      <button
        onClick={updateTodo}
        className="button"
        style={{
          right: "30%",
          position: "absolute",
          bottom: "5%",
          width: "4rem",
          borderRadius: "10%",
          backgroundColor: "#eee",
          padding: "5px",
          border: "1px solid",
          boxShadow: "1px 1px 0 0 rgba(0,0,0,0.5)",
        }}
      >
        <img
          width="20"
          height="20"
          src="https://img.icons8.com/ios/50/000000/double-tick.png"
          alt="double-tick"
        />
      </button>
    </div>
  );
};

export default Todo;
