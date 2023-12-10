import { Router } from "express";
import companySummary from "../api/ticket/controllers/companySummary"

const routers = Router();

routers.get("/api/summary/", companySummary.get);



export default routers;