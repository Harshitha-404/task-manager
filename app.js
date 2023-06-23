const express = require("express");
const dotenv = require("dotenv").config();
const task = require("./routes/Task");
const app = express();
const notfound = require("./middlewares/notfound");
//const errorHandlerMiddleware = require("./middlewares/errorHandler");
const { connectDB } = require("./db/connect");

//middleware
app.use(express.json());
app.use(express.static("./public"));

app.use("/api/v1/tasks", task);
app.use(notfound);

connectDB();
// app.use(errorHandlerMiddleware);
//app.get('api/v1/tasks')              - get all the task
//app.post('api/v1/tasks')             - create a new task
//app.get('api/v1/tasks/:id')          - get single task
//app.patch('api/v1/tasks/:id')        - update task
//app.delete('api/v1/tasks/:id')       - delete task

app.listen(process.env.PORT, () => {
  console.log("Server is running in " + `${process.env.PORT}`);
});
