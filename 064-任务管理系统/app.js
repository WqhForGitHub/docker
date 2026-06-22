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
    "CREATE TABLE IF NOT EXISTS tasks (id SERIAL, title VARCHAR(200), done BOOLEAN DEFAULT false)"
  );
  res.json({ ok: true });
});

app.get("/tasks", async (req, res) =>
  res.json((await pool.query("SELECT * FROM tasks ORDER BY id")).rows)
);
app.post("/tasks", async (req, res) =>
  res.json(
    (await pool.query("INSERT INTO tasks (title) VALUES ($1) RETURNING *", [req.body.title]))
      .rows[0]
  )
);
app.put("/tasks/:id", async (req, res) =>
  res.json(
    (
      await pool.query("UPDATE tasks SET done=$1 WHERE id=$2 RETURNING *", [
        req.body.done,
        req.params.id,
      ])
    ).rows[0]
  )
);
app.delete("/tasks/:id", async (req, res) => {
  await pool.query("DELETE FROM tasks WHERE id=$1", [req.params.id]);
  res.json({ ok: true });
});

app.listen(3000, () => console.log("Task app on 3000"));
