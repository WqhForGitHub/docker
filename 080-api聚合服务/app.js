const express = require("express");
const axios = require("axios");
const app = express();

// 聚合多个 API 数据
app.get("/aggregate", async (req, res) => {
  try {
    const [users, posts, comments] = await Promise.allSettled([
      axios.get("https://jsonplaceholder.typicode.com/users").then((r) => r.data.slice(0, 3)),
      axios.get("https://jsonplaceholder.typicode.com/posts").then((r) => r.data.slice(0, 3)),
      axios.get("https://jsonplaceholder.typicode.com/comments").then((r) => r.data.slice(0, 3)),
    ]);

    res.json({
      users: users.status === "fulfilled" ? users.value : { error: "unavailable" },
      posts: posts.status === "fulfilled" ? posts.value : { error: "unavailable" },
      comments: comments.status === "fulfilled" ? comments.value : { error: "unavailable" },
      timestamp: new Date().toISOString(),
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.get("/health", (req, res) => res.json({ status: "ok" }));

app.listen(3000, () => console.log("API Aggregator on 3000"));
