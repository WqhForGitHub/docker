const express = require("express");
const app = express();
app.get("/", (req, res) => res.json({ app: "security-demo", user: process.env.USER }));
app.listen(3000, () => console.log("Security demo on 3000"));
