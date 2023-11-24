import { Router } from "express";
import TicketService from "../api/ticket/controllers/findTickerController"

const routers = Router();

routers.get("/api/find/", TicketService.get);



export default routers;