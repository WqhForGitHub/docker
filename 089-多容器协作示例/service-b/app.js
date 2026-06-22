const http = require("http");
http
  .createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ service: process.env.SERVICE_NAME, data: "B" }));
  })
  .listen(3002, () => console.log("Service B on 3002"));
