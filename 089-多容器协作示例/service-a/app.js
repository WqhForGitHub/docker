const http = require("http");
http
  .createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ service: process.env.SERVICE_NAME, data: "A" }));
  })
  .listen(3001, () => console.log("Service A on 3001"));
