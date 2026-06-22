const express = require("express");
const app = express();

// 读取环境变量
app.get("/", (req, res) => {
  res.json({
    APP_NAME: process.env.APP_NAME || "unnamed",
    APP_VERSION: process.env.APP_VERSION || "0.0.0",
    DATABASE_URL: process.env.DATABASE_URL ? "***configured***" : "not set",
    API_KEY: process.env.API_KEY ? "***hidden***" : "not set",
    DEBUG: process.env.DEBUG || "false",
    env: process.env,
  });
});

app.listen(3000, () => console.log("Env var demo on 3000"));
