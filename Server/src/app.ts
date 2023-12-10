import express from "express";
import cors from "cors"
import routers from "./routes/routes"

const app = express();
app.use(express.json());

app.use(routers);
app.use(cors());


export default app;