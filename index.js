const express = require("express");
const todoRouter = require("./api/controllers/todo/router");
const userRouter = require("./api/controllers/user/router");

const app = express();

app.use(express.json());
// GET http://localhost:5000/todos/
// POST http://localhost:5000/todos/
app.use("/todos", todoRouter);
app.use("/users", userRouter);

app.listen(5000, () => {
  console.log("listening on http://localhost:5000");
});
