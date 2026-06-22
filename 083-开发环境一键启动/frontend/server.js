const express = require("express");
const app = express();
app.get("/", (req, res) => res.send('<h1>Dev Frontend</h1><a href="/api/">API</a>'));
app.listen(3000, () => console.log("Frontend dev on 3000"));
