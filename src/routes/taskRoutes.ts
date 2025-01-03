import { getTasks, createTask, updateTaskStatusById, deleteTaskById } from "../controllers/taskController";
import { Router } from "express";
import { validateId } from "../middleware/validation";

const taskRouter = Router();

// fetch all tasks or one task if id is provided 
taskRouter.get('/:id?', validateId, getTasks);

// create new task
taskRouter.post('/', createTask);

// update task status by id
taskRouter.put('/:id', validateId, updateTaskStatusById);

// delete task by id
taskRouter.delete('/:id', validateId, deleteTaskById);

export default taskRouter;