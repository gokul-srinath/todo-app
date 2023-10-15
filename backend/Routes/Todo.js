const { Router } = require("express");
// const TodoList = require("../Entities/TodoList");
const TodoModel = require("../Schema/TodoSchema");

const router = Router();

// const todoList = new TodoList();

router.get("/", async (req, res) => {
  // const todos = todoList.getAllTodos();
  const todos = await TodoModel.find();
  res.status(200).json({ data: { todos } });
});

router.get("/:id", async (req, res) => {
  const id = req.params.id;
  // const todo = todoList.getTodo(id);
  const todo = await TodoModel.findById(id);
  res.status(200).json({ data: { todo } });
});

router.post("/", async (req, res) => {
  const body = req.body;
  // todoList.addTodo(body.desc);
  try {
    await TodoModel.create({
      desc: body.desc,
      completed: false,
    });
    res.status(200).json({ data: { message: "OK" } });
  } catch (error) {
    res.status(400).json({ data: { message: error.message } });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const body = req.body;

    
    // todoList.updateTodo(id, body.desc, body.completed);
    await TodoModel.findByIdAndUpdate(id, {
      desc: body.desc,
      completed: body.completed || false,
    });
    res.status(200).json({ data: { message: "OK" } });
  } catch (error) {
    res.status(400).json({ data: { message: error.message } });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    // todoList.deleteTodo(id);
    await TodoModel.findByIdAndDelete(id);
    res.status(200).json({ data: { status: "OK" } });
  } catch (error) {
    res.status(400).json({ data: { message: error.message } });
  }
});

module.exports = router;
