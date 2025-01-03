import { Request, Response } from "express";
import { addTask, findByIdAndDelete, findByIdAndUpdateStatus, getAllTasks } from "../models/taskModel";

/**
 * Fetches the tasks from the db using model
 * @param req Request
 * @param res Response
 * @param next NextFunction
 * @returns
 */
export const getTasks = async (req: Request, res: Response) => {
    try {
        const tasks = await getAllTasks(req.params.id);
        if (tasks.length === 0) {
            res.status(404).json({ error: 'Task not found' });
            return;
        }
        res.json(tasks);
    } catch (err) {
        res.status(500).json({ msg: 'Internal Server Error', error: err });
    }
};

/**
 * Creates a new task in the db using model
 * @param req Request
 * @param res Response
 * @param next NextFunction
 * @returns
 */
export const createTask = async (req: Request, res: Response) => {
    try {
        const newTaskId = await addTask(req.body);
        res.status(201).json({ msg: "Task created", taskId: newTaskId });
    } catch (err) {
        res.status(500).json({ msg: 'Internal Server Error', error: err });
    }
};

/**
 * Updates the task status in the db using model
 * @param req Request
 * @param res Response
 * @param next NextFunction
 * @returns
*/
export const updateTaskStatusById = async (req: Request, res: Response) => {
    try {
        const { body: { status }, params: { id } } = req;
        const hasUpdated = await findByIdAndUpdateStatus(id, status);
        if (!hasUpdated) {
            res.status(404).json({ error: 'Task not found' });
        } else {
            res.sendStatus(204);
        }
    } catch (err) {
        res.status(500).json({ msg: 'Internal Server Error', error: err });
    }
};

/**
 * Deletes the task from the db using model
 * @param req Request
 * @param res Response
 * @param next NextFunction
 * @returns
*/
export const deleteTaskById = async (req: Request, res: Response) => {
    try {
        const hasDeleted = await findByIdAndDelete(Number(req.params.id));
        if (!hasDeleted) {
            res.status(404).json({ error: 'Task not found' });
        } else {
            res.sendStatus(204);
        }
    } catch (err) {
        res.status(500).json({ msg: 'Internal Server Error', error: err });
    }
};