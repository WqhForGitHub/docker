const express = require("express");
const app = express();
app.get("/", (req, res) =>
  res.json({
    service: "order-service",
    orders: [
      { id: 101, item: "Book" },
      { id: 102, item: "Pen" },
    ],
  })
);
app.listen(3002, () => console.log("Order Service on 3002"));
