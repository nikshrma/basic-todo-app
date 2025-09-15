const express = require("express");
const z = require("zod");
const { createTodo } = require("./types");

const app = express();
app.use(express.json());
app.post("/todos", (req, res) => {
  const todo = req.body;
  const result = createTodo.safeParse
  if (!result.success) {
    res.status(411).json({
      msg: "Invalid inputs. Please try again.",
    });
    return;
  }
  //if fine then put it in mongodb
});
app.get("/todos", (req, res) => {

});
app.put("/completed", (req, res) => {

});
