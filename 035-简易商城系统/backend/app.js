const express = require("express");
const app = express();
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});

const products = [
  { id: 1, name: "商品A", price: 9.9 },
  { id: 2, name: "商品B", price: 19.9 },
  { id: 3, name: "商品C", price: 29.9 },
];

app.get("/products", (req, res) => res.json(products));
app.listen(3000, () => console.log("Shop API on 3000"));
