import { Request, Response } from "express";
import axios from "axios";

export default new (class companySummary {
  async get(req: Request, res: Response) {
    const { ticket } = req.query;
    try {
      const response = await axios.get(
        `${process.env.BASE_URL}/${ticket}?token=${process.env.TOKEN_API}&modules=summaryProfile`
      );

      const { results } = response.data;
      const [result] = results;
      const summary = result.summaryProfile;

      const data = {
        site: summary.website,
        industry: summary.industry,
      };

      return res.status(200).json(data);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Internal server error", error });
    }
  }
})();
