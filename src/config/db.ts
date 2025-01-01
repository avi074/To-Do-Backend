import sqlite3 from 'sqlite3'

export const db = new sqlite3.Database('../db/tasks.db', (err) => {
	if (err) {
		console.error('Failed to connect to the database:', err)
	} else {
		console.log('Connected to the SQLite database.')
	}
})

export const connectDb = () => {
	db.serialize(() => {
		db.run(`
        CREATE TABLE IF NOT EXISTS tasks (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          title TEXT NOT NULL,
          description TEXT,
          status TEXT CHECK(status IN ('pending', 'in-progress', 'completed')) DEFAULT 'pending'
        )
      `)
	})
}
