const http = require("http");
http
  .createServer((req, res) => {
    res.writeHead(200);
    res.end("Optimized!\n");
  })
  .listen(3000, () => console.log("On 3000"));
