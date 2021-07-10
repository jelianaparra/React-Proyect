const tasksSchema = require("../models/tasks");

exports.getTask = async (req, res) => {
  const id = req.body.id;
  try {
    let tasks = await tasksSchema.findById(id);
    res.json({
      done: true,
      tasks,
    });
  } catch (err) {
    return res.status(400).json({
      done: false,
      error: "Something went wrong showing the task",
    });
  }
};

exports.getTaskbytitle = async (req, res) => {
  const id = req.body.title;
  try {
    let tasks = await tasksSchema.find({ title: id }).exec();
    res.json({
      done: true,
      tasks,
    });
  } catch (err) {
    return res.status(400).json({
      done: false,
      error: "Something went wrong showing the task",
    });
  }
};

exports.getTasks = async (req, res) => {
  try {
    let tasks = await tasksSchema.find();
    res.json({
      done: true,
      tasks,
    });
  } catch (err) {
    return res.status(400).json({
      done: false,
      error: "Something went wrong showing the tasks",
    });
  }
};

exports.addTask = async (req, res) => {
  const body = req.body;
  const id = req.id;
  try {
    const tasks = new tasksSchema(req.body);
    await tasks.save();
    res.json({
      done: true,
      msg: "Task added successfully!",
    });
  } catch (err) {
    //console.log("hhhhh", err);
    return res.status(400).json({
      done: false,
      error: "The task could not be added",
    });
  }
};

exports.uptadeTask = async (req, res) => {
  const { body } = req;
  const { id } = body;
  // console.log(body, id);
  //const body = req.body;
  //const id = req.id;
  try {
    await tasksSchema.findByIdAndUpdate(id, body);
    res.json({
      done: true,
      msg: "Tasks updated successfully",
    });
  } catch (err) {
    return res.status(400).json({
      done: false,
      error: "The tasks could not be updated",
    });
  }
};

exports.deleteTask = async (req, res) => {
  const id = req.body.id;
  try {
    await tasksSchema.findByIdAndDelete(id);
    res.json({
      done: true,
      msg: "Tasks delete successfully",
    });
  } catch (err) {
    return res.status(400).json({
      done: false,
      error: "Tasks could not be deleted",
    });
  }
};
