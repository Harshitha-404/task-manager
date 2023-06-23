const express = require("express");
const router = express.Router();
const {
  getAllTask,
  createTask,
  getTask,
  updateTask,
  deleteTask,
} = require("../controllers/tasklogic");

//app.get('api/v1/tasks')              - get all the task
//app.post('api/v1/tasks')             - create a new task
router.route("/").get(getAllTask).post(createTask);
//app.get('api/v1/tasks/:id')          - get single task
//put/patch < update task >
//app.patch('api/v1/tasks/:id')        - update task
//app.delete('api/v1/tasks/:id')       - delete task
router.route("/:id").get(getTask).patch(updateTask).delete(deleteTask);

module.exports = router;
