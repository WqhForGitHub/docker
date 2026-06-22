const express = require("express");
const app = express();
const os = require("os");

app.get("/", (req, res) =>
  res.json({
    app: "cloud-native",
    version: "1.0",
    hostname: os.hostname(),
    platform: os.platform(),
  })
);

app.get("/health", (req, res) => res.json({ status: "healthy" }));
app.get("/ready", (req, res) => res.json({ status: "ready" }));

app.listen(3000, () => console.log("Cloud native app on 3000"));
