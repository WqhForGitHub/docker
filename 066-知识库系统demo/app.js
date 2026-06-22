const express = require("express");
const { Pool } = require("pg");
const app = express();
app.use(express.json());
app.use(express.static("public"));

const pool = new Pool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
});

app.get("/init", async (req, res) => {
  await pool.query(
    "CREATE TABLE IF NOT EXISTS articles (id SERIAL, title VARCHAR(200), content TEXT, tags VARCHAR(200))"
  );
  res.json({ ok: true });
});

app.get("/api/articles", async (req, res) => {
  const q = req.query.q;
  const r = q
    ? await pool.query("SELECT * FROM articles WHERE title ILIKE $1 OR content ILIKE $1", [
        `%${q}%`,
      ])
    : await pool.query("SELECT * FROM articles ORDER BY id DESC");
  res.json(r.rows);
});

app.post("/api/articles", async (req, res) => {
  const { title, content, tags } = req.body;
  const r = await pool.query(
    "INSERT INTO articles (title, content, tags) VALUES ($1,$2,$3) RETURNING *",
    [title, content, tags || ""]
  );
  res.json(r.rows[0]);
});

app.listen(3000, () => console.log("Knowledge base on 3000"));
