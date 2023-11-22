import { Router } from "express";
import TicketService from "../api/ticket/controllers/findTicket"

const routers = Router();

routers.post("/api/podverse/register", TicketService.teste);



export default routers;