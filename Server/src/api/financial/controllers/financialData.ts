import { Request, Response } from "express";
import axios from "axios";

export default new (class financialData {
  async get(req: Request, res: Response) {
    const { ticket } = req.query;
    try {
      const response = await axios.get(
        `${process.env.BASE_URL}/${ticket}?token=${process.env.TOKEN_API}&modules=summaryProfile`
      );

      const { results } = response.data;
      const [result] = results;

      const data = [
        {
          symbol: result.symbol,
          twoHundredDayAverage: result.twoHundredDayAverage,
          regularMarketPrice: result.regularMarketPrice,
          regularMarketPreviousClose: result.regularMarketPreviousClose,
          regularMarketOpen: result.regularMarketOpen,
          logourl: result.logourl,
        },
      ];

      return res.status(200).json(data);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Internal server error", error });
    }
  }
})();
