import express, {Express} from "express"


const app:Express = express()

const PORT = 3000

app.use(express.json())

app.listen(PORT)