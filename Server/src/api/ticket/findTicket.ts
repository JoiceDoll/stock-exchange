import axios from "axios";
import * as http from "http";

class findTicket {
  async ticket(req: http.IncomingMessage, res: http.ServerResponse) {
    await axios
      .get("https://brapi.dev/api/quote/PETR4?token=77SN4iaTi2LyPdUXMWCxSL")
      .then(function (response) {
        const result = response.data;

        console.log(result)
        // const data = {

        // }
        return res.writeHead(200, { "Content-Type": "text/plain" });
      })
      .catch(function (error) {
        return res.writeHead(400, { "Content-Type": "text/plain" });
      });
  }
}

export default new findTicket();
