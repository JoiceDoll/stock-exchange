import { Router } from "express";
import companySummary from "../api/summary/controllers/companySummary";
import financialData from "../api/financial/controllers/financialData";
const routers = Router();

routers.get("/api/summary", companySummary.get);
routers.get("/api/financial", financialData.get);

export default routers;
