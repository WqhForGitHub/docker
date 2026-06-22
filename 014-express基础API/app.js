const express = require("express");
const app = express();
app.use(express.json());

let items = [];

// 获取所有
app.get("/api/items", (req, res) => res.json(items));

// 新增
app.post("/api/items", (req, res) => {
  const item = { id: Date.now(), ...req.body };
  items.push(item);
  res.status(201).json(item);
});

// 删除
app.delete("/api/items/:id", (req, res) => {
  items = items.filter((i) => i.id != req.params.id);
  res.status(204).end();
});

app.listen(3000, () => console.log("Express API 运行在 3000 端口"));
