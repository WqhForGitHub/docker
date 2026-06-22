const express = require("express");
const app = express();

let isReady = false;
let requestCount = 0;

// 启动 5 秒后变为就绪
setTimeout(() => {
  isReady = true;
  console.log("应用就绪");
}, 5000);

// 存活检查: 容器是否运行
app.get("/health", (req, res) => {
  res.json({ status: "alive", uptime: process.uptime() });
});

// 就绪检查: 是否准备好接收流量
app.get("/ready", (req, res) => {
  if (isReady) res.json({ status: "ready" });
  else res.status(503).json({ status: "not ready" });
});

app.get("/", (req, res) => {
  requestCount++;
  res.json({ msg: "OK", requests: requestCount });
});

app.listen(3000, () => console.log("Healthcheck demo on 3000"));
