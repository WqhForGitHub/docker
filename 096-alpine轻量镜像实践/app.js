const http = require("http");
http
  .createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ os: "alpine", runtime: "node" }));
  })
  .listen(3000, () => console.log("Alpine app on 3000"));
