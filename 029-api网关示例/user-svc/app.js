const http = require("http");
http
  .createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ service: "user-svc", users: [{ id: 1, name: "Alice" }] }));
  })
  .listen(3001, () => console.log("User svc on 3001"));
