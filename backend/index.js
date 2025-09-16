const express = require("express");
const z = require("zod");
const { createTodo, updateTodo } = require("./types");
const mongoose = require("mongoose");
const { Todo } = require("./db");

const app = express();
app.use(express.json());
app.post("/todos", async(req, res) => {
  const todo = req.body;
  const result = createTodo.safeParse(todo);
  if (!result.success) {
    res.status(411).json({
      msg: "Invalid inputs. Please try again.",
    });
    return;
  }
  try {
    const newTodo = await Todo.create({
    title: todo.title,
    description: todo.description,
    completed:false
  }); 
  res.json({
    "msg":"todo created successfully",
    newTodo
  })
  } catch (error) {
    res.status(500).json({
    "msg":" todo could not be created",
  })
 }
});
app.get("/todos", async(req, res) => {
  const todos = await Todo.find({});
  res.json({
    "msg": "here are your todos",
    todos
  })
});
app.put("/completed", async(req, res) => {
    const updatePayload = req.body;
    const parsedPayload = updateTodo.safeParse(updatePayload);
    if (!parsedPayload.success) {
    res.status(411).json({
      msg: "Invalid inputs. Please try again.",
    });
    return;
  }
  
  const updatedTodo =await Todo.findByIdAndUpdate(
    updatePayload.id,
    {$set:{completed : true}},
    {new:true}
  )
  res.json({
    msg:"Updated todo",
    updatedTodo
  })
});
app.listen(3000);