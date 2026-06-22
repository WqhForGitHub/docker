const express = require("express");
const app = express();
app.get("/", (req, res) => res.json({ app: "ci-cd-demo", build: process.env.BUILD_NUMBER }));
app.get("/health", (req, res) => res.json({ status: "ok" }));
app.listen(3000, () => console.log("CI/CD demo on 3000"));
