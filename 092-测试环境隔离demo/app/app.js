const express = require("express");
const app = express();
app.get("/", (req, res) => res.json({ env: "test", db: process.env.DB_HOST }));
app.get("/health", (req, res) => res.json({ status: "ok" }));
app.listen(3000, () => console.log("Test app on 3000"));
