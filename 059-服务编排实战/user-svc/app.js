const http = require("http");
http
  .createServer((q, s) => {
    s.writeHead(200);
    s.end(JSON.stringify({ svc: "user" }));
  })
  .listen(3001);
