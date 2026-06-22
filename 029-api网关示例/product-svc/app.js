const http = require("http");
http
  .createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(
      JSON.stringify({ service: "product-svc", products: [{ id: 1, name: "Book", price: 9.9 }] })
    );
  })
  .listen(3002, () => console.log("Product svc on 3002"));
