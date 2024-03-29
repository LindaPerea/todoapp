const { Router } = require("express");
const { getAllTasks, getTaskById,  createTask, updateTask, deleteTask } = require("../controllers/todos.controller");
const authMiddleware = require('../middlewares/auth.middleware');

const router = Router();

router.get("/todos", authMiddleware, getAllTasks);

router.get("/todos/:id",authMiddleware, getTaskById);

router.post("/todos",authMiddleware, createTask);

router.put("/todos/:id",authMiddleware, updateTask);

router.delete("/todos/:id", authMiddleware, deleteTask);

module.exports = router;