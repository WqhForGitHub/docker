const express = require("express");
const app = express();
app.get("/", (req, res) =>
  res.json({
    service: "user-service",
    users: [
      { id: 1, name: "Alice" },
      { id: 2, name: "Bob" },
    ],
  })
);
app.listen(3001, () => console.log("User Service on 3001"));
