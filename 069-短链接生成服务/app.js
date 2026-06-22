const express = require("express");
const crypto = require("crypto");
const fs = require("fs");
const app = express();
app.use(express.json());
app.use(express.static("public"));

const DB = "/app/data/urls.json";
const urls = fs.existsSync(DB) ? JSON.parse(fs.readFileSync(DB)) : {};

function save() {
  fs.mkdirSync("/app/data", { recursive: true });
  fs.writeFileSync(DB, JSON.stringify(urls));
}

app.post("/api/shorten", (req, res) => {
  const { url } = req.body;
  const id = crypto.randomBytes(3).toString("hex");
  urls[id] = url;
  save();
  res.json({ short: `http://localhost:3000/${id}`, id });
});

app.get("/:id", (req, res) => {
  const url = urls[req.params.id];
  if (url) res.redirect(url);
  else res.status(404).send("未找到");
});

app.get("/api/list", (req, res) => res.json(urls));

app.listen(3000, () => console.log("URL shortener on 3000"));
