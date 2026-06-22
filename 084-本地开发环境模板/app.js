const express = require("express");
const app = express();
app.get("/", (req, res) => res.json({ env: process.env.NODE_ENV, app: "local-dev" }));
app.listen(3000, () => console.log("Local dev on 3000"));
