const express = require("express");
const { createClient } = require("redis");
const app = express();
app.use(express.json());
app.use(express.static("public"));

const client = createClient({ url: process.env.REDIS_URL });
client.connect();

const OPTIONS = ["选项A", "选项B", "选项C"];

app.get("/api/options", (req, res) => res.json(OPTIONS));

app.get("/api/results", async (req, res) => {
  const results = {};
  for (const opt of OPTIONS) {
    results[opt] = parseInt((await client.get(`vote:${opt}`)) || "0");
  }
  res.json(results);
});

app.post("/api/vote", async (req, res) => {
  const { option } = req.body;
  if (!OPTIONS.includes(option)) return res.status(400).json({ error: "无效选项" });
  await client.incr(`vote:${option}`);
  res.json({ ok: true });
});

app.listen(3000, () => console.log("Voting app on 3000"));
