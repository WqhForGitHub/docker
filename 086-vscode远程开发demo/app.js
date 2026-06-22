const express = require("express");
const app = express();
app.get("/", (req, res) => res.json({ mode: "vscode-remote" }));
app.listen(3000, () => console.log("Remote dev on 3000"));
