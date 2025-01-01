import express, {Express} from "express"
import taskRouter from "./routes/taskRoutes"


const app:Express = express()

const PORT = 3000

// app.use(cors())
app.use(express.json())


app.use('/api/tasks', taskRouter)


app.listen(PORT)