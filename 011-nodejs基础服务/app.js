const express = require("express");
const app = express();
app.get("/", (req, res) => res.json({ service: "nodejs-basic", port: 3000 }));
app.get("/health", (req, res) => res.json({ status: "healthy" }));
app.listen(3000, () => console.log("Node.js 服务运行在 3000 端口"));
