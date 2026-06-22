const express = require("express");
const jwt = require("jsonwebtoken");
const app = express();
app.use(express.json());

const SECRET = "jwt-demo-key";
const users = [{ username: "admin", password: "admin123" }];

app.post("/login", (req, res) => {
  const { username, password } = req.body;
  const user = users.find((u) => u.username === username && u.password === password);
  if (!user) return res.status(401).json({ error: "用户名或密码错误" });
  const token = jwt.sign({ username }, SECRET, { expiresIn: "24h" });
  res.json({ token, expiresIn: "24h" });
});

function verifyToken(req, res, next) {
  const token = req.headers.authorization?.split(" ")[1];
  try {
    req.user = jwt.verify(token, SECRET);
    next();
  } catch {
    res.status(403).json({ error: "Token 无效或过期" });
  }
}

app.get("/dashboard", verifyToken, (req, res) => {
  res.json({ message: `欢迎 ${req.user.username}`, data: { visits: 100 } });
});

app.listen(3000, () => console.log("JWT Login System on 3000"));
