const express = require("express");
const { createClient } = require("redis");
const app = express();

const client = createClient({ url: process.env.REDIS_URL });
client.connect();

app.get("/cache/:key", async (req, res) => {
  const key = req.params.key;
  const cached = await client.get(key);
  if (cached) return res.json({ source: "cache", data: cached });
  const value = `value-${Date.now()}`;
  await client.set(key, value, { EX: 60 });
  res.json({ source: "db", data: value });
});

app.listen(3000, () => console.log("Redis cache demo on 3000"));
