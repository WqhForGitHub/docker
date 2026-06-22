const http = require("http");
http
  .createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ color: process.env.COLOR, host: require("os").hostname() }));
  })
  .listen(3000, () => console.log(`${process.env.COLOR} on 3000`));
