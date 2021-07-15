const Tasks = require("../controllers/task.controller");
const { Router } = require("express");
const router = Router();

// obtener una sola tarea
router.post("/task", Tasks.getTask);

// obtener todas las pelis
router.get("/alltasks", Tasks.getTasks);

// obtener las estadisticas
//router.get("/taskstatistics", Tasks.getStatistics);

// obtener una sola tarea por el titulo
router.post("/taskbytitle", Tasks.getTaskbytitle);

// obtener una sola tarea por la description
router.post("/taskbydescription", Tasks.getTaskbydescription);

// insertar una tarea
router.post("/addtask", Tasks.fileUpload, Tasks.addTask);

// acttualizar una tarea
router.put("/uptadetask/:id", Tasks.fileUpload, Tasks.uptadeTask);

//borrar una tarea
router.delete("/deletetask", Tasks.deleteTask);

module.exports = router;
