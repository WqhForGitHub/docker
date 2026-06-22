const express = require("express");
const app = express();

app.get("/", (req, res) => res.json({ project: "standard-structure" }));
app.get("/health", (req, res) => res.json({ status: "ok" }));

app.listen(3000, () => console.log("App on 3000"));
