const express = require("express");
const app = express();
app.get("/", (req, res) => res.json({ env: "devcontainer", time: new Date() }));
app.listen(3000, () => console.log("DevContainer app on 3000"));
