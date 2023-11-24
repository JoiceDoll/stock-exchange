import { Request, Response } from "express";
import axios from "axios";

class findTicket {
  async get(req: Request, res: Response) {
    const { ticket } = req.query;
    await axios
      .get(process.env.BASE_URL + `search=${ticket}`)
      .then(function (response) {
        const result = response.data;
        return res.status(200).json(result);
      })
      .catch(function (error) {
        return res.status(400).json({ message: "Ticket error", error });
      });
  }
}

export default new findTicket();
