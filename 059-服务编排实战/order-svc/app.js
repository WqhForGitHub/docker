const http = require("http");
http
  .createServer((q, s) => {
    s.writeHead(200);
    s.end(JSON.stringify({ svc: "order" }));
  })
  .listen(3002);
