const http = require("http");
http
  .createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("OK\n");
  })
  .listen(3000, () => console.log("Minimal service on 3000"));
