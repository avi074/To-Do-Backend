import sqlite3 from 'sqlite3';
import logger from './logger';

// For memory->		:memory:
export const db = new sqlite3.Database('./tasks.db', (err) => {
	if (err) {
		logger.error(`Failed to connect to the database: ${err}`);
	} else {
		logger.info('Connected to SQLite...');
	}
});

export const connectDB = () => {
	db.serialize(() => {
		db.run(`
        CREATE TABLE IF NOT EXISTS tasks (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          title TEXT NOT NULL,
          description TEXT,
          status TEXT CHECK(status IN ('pending', 'in-progress', 'completed')) DEFAULT 'pending'
        )
      `);
	});
};
