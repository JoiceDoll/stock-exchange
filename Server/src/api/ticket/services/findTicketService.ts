import axios from "axios";
class TicketService {
  async get(ticket:string) {
  const teste =  await axios
      .get("https://brapi.dev/api/MXRF11?token=fPfqm16KTrKDCrrNXJuzqF")
      .then(function (response) {
        const result = response.data;
      
        return result;
 ;
      });
  }
}

export default new TicketService();
