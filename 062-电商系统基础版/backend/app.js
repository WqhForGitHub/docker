const express = require("express");
const app = express();
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});

const products = [
  { id: 1, name: "iPhone", price: 6999 },
  { id: 2, name: "MacBook", price: 12999 },
  { id: 3, name: "AirPods", price: 1299 },
];

app.get("/products", (req, res) => res.json(products));
app.get("/products/:id", (req, res) => {
  const p = products.find((p) => p.id == req.params.id);
  res.json(p || { error: "未找到" });
});

app.listen(3000, () => console.log("Shop API on 3000"));
