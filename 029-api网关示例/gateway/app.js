const express = require("express");
const { createProxyMiddleware } = require("http-proxy-middleware");
const app = express();

// 限流模拟
let requestCount = 0;
app.use((req, res, next) => {
  requestCount++;
  console.log(`[Gateway] ${requestCount}: ${req.method} ${req.url}`);
  next();
});

// 路由转发
app.use("/users", createProxyMiddleware({ target: "http://user-svc:3001", changeOrigin: true }));
app.use(
  "/products",
  createProxyMiddleware({ target: "http://product-svc:3002", changeOrigin: true })
);

app.get("/health", (req, res) => res.json({ status: "up" }));

app.listen(8080, () => console.log("API Gateway on :8080"));
