const express = require("express");
const app = express();
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});

const posts = [
  { title: "Docker 入门", content: "学习 Docker 容器化..." },
  { title: "全栈开发", content: "前后端分离架构..." },
];

app.get("/posts", (req, res) => res.json(posts));
app.listen(3000, () => console.log("Blog API on 3000"));
