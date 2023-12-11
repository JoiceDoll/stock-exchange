import { Request, Response } from "express";
import axios from "axios";

export default new class financialData {
  async get(req: Request, res: Response) {
    const { ticket } = req.query;
    try {
      const response = await axios.get(
        `${process.env.BASE_URL}/${ticket}?token=${process.env.TOKEN_API}&modules=summaryProfile`
      );

      const { results } = response.data;
      const [result] = results;
      const financial = result.summaryProfile;

      const data = {
        symbol: financial.symbol,
        twoHundredDayAverage: financial.twoHundredDayAverage,
        regularMarketPrice: financial.regularMarketPrice,
        priceEarnings: financial.priceEarnings,
        fullTimeEmployees: financial.fullTimeEmployees,
      };

      return res.status(200).json(data);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Internal server error", error });
    }
  }
};
