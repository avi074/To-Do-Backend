import { RunResult } from "sqlite3";
import { db } from "../db";

interface Task {
  id?: number;
  title: string;
  description?: string;
  status: 'pending' | 'in-progress' | 'completed';
}

// Function to get all tasks
export const getAllTasks = (taskId?: number | string): Promise<any[]> => {
  return new Promise((resolve, reject) => {
    let sql = 'SELECT * FROM tasks';
    const params: any[] = [];

    if (taskId) {
      // If taskId is provided, fetch the specific task
      sql += ' WHERE id = ?';
      params.push(taskId);
    }

    db.all(sql, params, (err, rows) => {
      if (err) {
        reject(err);
      } else {
        resolve(rows);
      }
    });
  });
};

// Function to create new task
export const addTask = (task: Task): Promise<any> => {
  return new Promise((resolve, reject) => {
    const { title, description, status } = task;
    // SQL statement to insert the task
    const sql = `INSERT INTO tasks (title, description, status) VALUES (?, ?, ?)`;

    // Parameters to insert (description is optional and will be set to null if not provided)
    const params = [title, description ?? null, status ?? 'pending'];

    db.run(sql, params, function (this: RunResult, err: Error | null) {
      if (err) {
        reject(err);
      } else {
        resolve(this.lastID);
      }
    });
  });
};

// Function to update the tasak status by id
export const findByIdAndUpdateStatus = (taskId: number | string, status: 'pending' | 'in-progress' | 'completed'): Promise<boolean> => {
  return new Promise((resolve, reject) => {
    const sql = `UPDATE tasks SET status = ? WHERE id = ?`;

    db.run(sql, [status, taskId], function (this: RunResult, err: Error | null) {
      if (err) {
        reject(err);
      } else {
        resolve(Boolean(this.changes));
      }
    });
  });
};

// Function to delete the task by id
export const findByIdAndDelete = (taskId: number | string): Promise<boolean> => {
  return new Promise((resolve, reject) => {
    const sql = `DELETE FROM tasks WHERE id = ?`;

    db.run(sql, [taskId], function (this: RunResult, err: Error | null) {
      if (err) {
        reject(err);
      } else {
        resolve(Boolean(this.changes));
      }
    });
  });
};