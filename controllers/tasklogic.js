const Task = require("../models/taskmodel");
const asyncWrapper = require("../middlewares/async");
const getAllTask = asyncWrapper(async (req, res) => {
  try {
    const tasks = await Task.find({});
    res.status(201).json({ tasks });
    // res.status(201).json({
    //   status: "success",
    //   data: {
    //     nbits: tasks.length,
    //     tasks,
    //   },
    // });
  } catch (err) {
    res.status(500).json({ msg: err });
  }
});

const createTask = async (req, res) => {
  try {
    const task = await Task.create(req.body);
    res.status(201).json({ task });
  } catch (err) {
    res.status(500).json({ msg: err });
  }

  //res.send("createTask");
};

const getTask = async (req, res, err) => {
  try {
    const taskId = req.params.id;
    const fetchTask = await Task.findOne({ _id: taskId });

    if (!fetchTask) {
      // const error = new Error("Not Error");
      // error.status = 404;
      // return next(error);
      return res.status(404).json({ msg: `No task with the id : ${taskId}` });
    }
    res.status(200).json({ fetchTask });
  } catch (err) {
    res.status(500).json({ msg: err });
  }
};

const updateTask = async (req, res) => {
  try {
    const { id: taskID } = req.params;
    const task = await Task.findByIdAndUpdate({ _id: taskID }, req.body, {
      new: true,
      runValidators: true,
    });
    if (!task) {
      res.status(400).json({ msg: `No task with the id : ${taskId}` });
    }
    res.status(200).json({ task });
  } catch (err) {
    res.status(500).json({ msg: err });
  }
};

const deleteTask = async (req, res) => {
  try {
    const { id: taskId } = req.params; //  const taskId = req.params.id;
    const task = await Task.findOneAndDelete({ _id: taskId });
    if (!task) {
      return res.status(404).json({ msg: `No task with the id : ${taskId}` });
    }
    res.status(200).json({ task });
  } catch (err) {
    res.status(500).json({ msg: err });
  }
};
module.exports = {
  getAllTask,
  createTask,
  getTask,
  updateTask,
  deleteTask,
};
