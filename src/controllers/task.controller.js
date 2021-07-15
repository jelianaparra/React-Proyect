const tasksSchema = require("../models/tasks");
const multer = require("multer");
const multerConfig = require("../utils/multerConfig");
const upload = multer(multerConfig).single("image");

// subida de archivo
exports.fileUpload = (req, res, next) => {
  upload(req, res, function (error) {
    if (error) {
      res.json({ message: error });
    }
    return next();
  });
};

exports.getTask = async (req, res) => {
  const id = req.body.id;
  try {
    let tasks = await tasksSchema.findById(id);
    res.json({
      done: true,
      tasks,
    });
  } catch (err) {
    console.log(err);
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

exports.getTaskbydescription = async (req, res) => {
  const id = req.body.description;
  try {
    let tasks = await tasksSchema.find({ description: id }).exec();
    res.json({
      done: true,
      tasks,
    });
    //console.log("dfghjkl");
  } catch (err) {
    return res.status(400).json({
      done: false,
      error: "Something went wrong showing the task",
    });
  }
};

exports.getTasks = async (req, res) => {
  try {
    //._addSpecial("$orderby", { count: -1 })
    let tasks = await tasksSchema.find();
    res.json({
      done: true,
      tasks,
    });
  } catch (err) {
    console.log(err);
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
    if (req.file && req.file.filename) {
      tasks.image = req.file.filename;
    }
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

exports.uptadeTask = async (req, res, next) => {
  try {
    // generate new task
    let newTask = req.body;

    // if new image
    if (req.file && req.file.filename) {
      newTask.image = req.file.filename;
    } else {
      const task = await tasksSchema.findById(req.params.id);
      newTask.image = task.image;
    }
    req.body.count = req.body.count + 1;
    const taskUpdated = await tasksSchema.findOneAndUpdate(
      { _id: req.params.id },
      { ...newTask }
      //{ new: true }, // return updated

      /*function (error, hola) {
        if (error) {
          console.log(error);
          //res.json({ message: error });
        }
        console.log(hola);
      }*/
    );
    //console.log("hhhh");
    res.json({ message: "Task updated success" });
  } catch (error) {
    console.log(error);
    res.json({
      message: "Error, check your sended info",
    });
    next();
  }
};

/*exports.getStatistics = async (req, res) => {
  let { id, count } = req.body;
  count = count + 1;
  // console.log(body, id);
  //const body = req.body;
  //const id = req.id;
  try {
    let tasks = await tasksSchema.findByIdAndUpdate(id, count);
    res.json({
      done: true,
      tasks,
    });
  } catch (err) {
    return res.status(400).json({
      done: false,
      error: "Something happen showing the statistics",
    });
  }
};*/

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
