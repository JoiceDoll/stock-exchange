import { Request, Response } from "express";
import TicketService from "../services/findTicketService";

class findTicket {
  async teste(req: Request, res: Response) {
    const ticket = req.query;

    const teste = await TicketService.get(ticket as any);
    console.log(teste)
    res.status(200).json({ teste });
  }
}

export default new findTicket();
