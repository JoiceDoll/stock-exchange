import { Request, Response } from "express";
import axios from "axios";

class companySummary {
  async get(req: Request, res: Response) {
    const { ticket } = req.query;
    await axios
      .get(
        `${process.env.BASE_URL}/PETR4?token=${process.env.TOKEN_API}&modules=summaryProfile`
      )
      .then(function (response) {
        console.log(response.data);
        // const [result] = response.data;

        // const data = {
        //   name: result.name,
        //   close: result.close,
        //   logo: result.logo,
        // };
        // console.log(result);
        // return res.status(200).json(data);
      })
      .catch(function (error) {
        console.log(error);
        // return res.status(400).json({ message: "Ticket error", error });
      });
  }
}

export default new companySummary();
