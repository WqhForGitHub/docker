const express = require("express");
const { Pool } = require("pg");
const app = express();
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});

const pool = new Pool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
});

app.get("/init", async (req, res) => {
  await pool.query(
    "CREATE TABLE IF NOT EXISTS posts (id SERIAL, title VARCHAR(200), content TEXT)"
  );
  await pool.query(
    "INSERT INTO posts (title, content) VALUES ('第一篇', 'Hello World'), ('第二篇', 'Docker 全栈')"
  );
  res.json({ msg: "初始化完成" });
});

app.get("/posts", async (req, res) => {
  const r = await pool.query("SELECT * FROM posts");
  res.json(r.rows);
});

app.listen(3000, () => console.log("Blog backend on 3000"));
