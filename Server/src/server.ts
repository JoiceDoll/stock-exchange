import http from "http";

const server = http
  .createServer(function (req, res) {
    console.log("Server is running");

    res.setHeader("Content-Type", "application/json");
    switch (req.url) {
      case "/books":
        res.writeHead(200);
        res.end("teste");
        break;
    }
  })
  .listen(process.env.LISTEN);

export default server;
