import express from "express";
import {
  createTask,
  deleteTask,
  editTask,
  getAllTasks,
  getTask,
} from "../controllers/taskController";
const router = express.Router();

router.get("/", getAllTasks);
router.get("/:id", getTask);
router.put("/:id", editTask);
router.delete("/:id", deleteTask);
router.post("/", createTask);
export default router;
