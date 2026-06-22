const express = require("express");
const { createProxyMiddleware } = require("http-proxy-middleware");
const app = express();

app.use("/user", createProxyMiddleware({ target: "http://user-service:3001", changeOrigin: true }));
app.use(
  "/order",
  createProxyMiddleware({ target: "http://order-service:3002", changeOrigin: true })
);

app.get("/", (req, res) => res.json({ gateway: "online", routes: ["/user", "/order"] }));
app.listen(3000, () => console.log("API Gateway on 3000"));
