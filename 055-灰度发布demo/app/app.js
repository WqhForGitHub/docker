const http = require("http");
http
  .createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ version: process.env.APP_VERSION, host: require("os").hostname() }));
  })
  .listen(3000, () => console.log(`App ${process.env.APP_VERSION} on 3000`));
