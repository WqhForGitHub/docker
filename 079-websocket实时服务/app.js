const express = require("express");
const http = require("http");
const WebSocket = require("ws");
const app = express();
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

app.use(express.static("public"));

// 实时数据推送
setInterval(() => {
  const data = JSON.stringify({
    type: "tick",
    time: new Date().toISOString(),
    value: Math.floor(Math.random() * 100),
  });
  wss.clients.forEach((c) => {
    if (c.readyState === 1) c.send(data);
  });
}, 1000);

// 消息广播
wss.on("connection", (ws) => {
  ws.send(JSON.stringify({ type: "info", msg: "已连接实时服务" }));
  ws.on("message", (data) => {
    wss.clients.forEach((c) => {
      if (c.readyState === 1) c.send(data);
    });
  });
});

server.listen(3000, () => console.log("WebSocket realtime on 3000"));
