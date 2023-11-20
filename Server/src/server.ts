import http from "http";
import findTicket from "./api/ticket/findTicket";
const url = require('url');
const server = http
  .createServer(function (req, res) {
    console.log("Server is running");

    res.setHeader("Content-Type", "application/json");
    switch (req.method) {
      case 'GET':
        handleGetRequest(path, findTicket.ticket, res);
        break;
    }
  })
  .listen(process.env.LISTEN);

  function handleGetRequest(path, query, res) {
    if (path === '/books') {
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.end('GET: List of books');
    } else {
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end('Not Found');
    }
  }

export default server;
