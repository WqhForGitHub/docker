const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());
app.get("/", (req, res) => res.json({ message: "后端API数据", time: new Date() }));
app.listen(3000, () => console.log("Backend on 3000"));
