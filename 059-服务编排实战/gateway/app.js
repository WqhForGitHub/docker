const http = require("http");
http
  .createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ gateway: "online", routes: ["/users", "/orders", "/payments"] }));
  })
  .listen(8080, () => console.log("Gateway on 8080"));
