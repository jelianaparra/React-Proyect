const Tasks = require("../controllers/task.controller");
const { Router } = require("express");
const router = Router();

// obtener una sola tarea
router.post("/task", Tasks.getTask);

// obtener todas las pelis
router.get("/alltasks", Tasks.getTasks);

// obtener una sola tarea por el titulo
router.post("/taskbytitle", Tasks.getTaskbytitle);

// insertar una tarea
router.post("/addtask", Tasks.addTask);

// acttualizar una tarea
router.put("/uptadetask", Tasks.uptadeTask);

//borrar una tarea
router.delete("/deletetask", Tasks.deleteTask);

module.exports = router;
