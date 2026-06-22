const http = require("http");
http
  .createServer((q, s) => {
    s.writeHead(200);
    s.end(JSON.stringify({ svc: "payment" }));
  })
  .listen(3003);
