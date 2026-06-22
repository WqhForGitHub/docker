const express = require("express");
const http = require("http");
const WebSocket = require("ws");
const app = express();
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

app.use(express.static("."));

const clients = new Set();
wss.on("connection", (ws) => {
  clients.add(ws);
  ws.send(JSON.stringify({ type: "system", msg: "已连接到聊天室" }));
  ws.on("message", (data) => {
    const msg = JSON.parse(data);
    clients.forEach((c) => {
      if (c.readyState === 1) c.send(data);
    });
  });
  ws.on("close", () => clients.delete(ws));
});

server.listen(3000, () => console.log("Chat room on 3000"));
