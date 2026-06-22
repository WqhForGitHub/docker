const express = require("express");
const app = express();

const ENV = process.env.NODE_ENV || "development";
const config = {
  development: { db: "localhost", debug: true },
  staging: { db: "staging-db", debug: true },
  production: { db: "prod-db", debug: false },
};

app.get("/", (req, res) =>
  res.json({
    env: ENV,
    config: config[ENV],
    port: process.env.PORT || 3000,
  })
);

app.listen(process.env.PORT || 3000, () =>
  console.log(`App [${ENV}] on ${process.env.PORT || 3000}`)
);
