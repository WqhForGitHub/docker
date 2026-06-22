const express = require("express");
const app = express();
app.use(express.json());
app.get("/", (req, res) => res.json({ template: "node-api" }));
app.listen(3000, () => console.log("Node API on 3000"));
