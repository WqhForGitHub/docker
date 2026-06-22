const express = require("express");
const app = express();
app.get("/", (req, res) => res.json({ app: "production-template", env: process.env.NODE_ENV }));
app.get("/health", (req, res) => res.json({ status: "healthy" }));
app.listen(3000, () => console.log("Production app on 3000"));
