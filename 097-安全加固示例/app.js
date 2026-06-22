const express = require("express");
const app = express();

app.disable("x-powered-by");
app.use((req, res, next) => {
  res.header("X-Content-Type-Options", "nosniff");
  res.header("X-Frame-Options", "DENY");
  res.header("X-XSS-Protection", "1; mode=block");
  next();
});

app.get("/", (req, res) => res.json({ app: "security-hardened" }));
app.get("/health", (req, res) => res.json({ status: "ok" }));

app.listen(3000, () => console.log("Secured app on 3000"));
