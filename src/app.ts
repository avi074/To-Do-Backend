import express, { Express } from "express";
import cors from "cors";
import taskRouter from "./routes/taskRoutes";
import { connectDB } from "./db";
import { logReqRes } from "./middleware/logReqRes";
import logger from "./logger";

const app: Express = express();

const PORT = 3000;

app.use(cors());
app.use(express.json());
app.use(logReqRes);

app.use('/api/tasks', taskRouter);

app.listen(PORT, () => {
    logger.info('Connected to Server...');
});

connectDB();