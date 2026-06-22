const express = require("express");
const { Client } = require("@elastic/elasticsearch");
const app = express();
app.use(express.json());

const client = new Client({ node: process.env.ES_URL });

async function init() {
  await new Promise((r) => setTimeout(r, 10000));
  const exists = await client.indices.exists({ index: "articles" });
  if (!exists) {
    await client.indices.create({ index: "articles" });
    await client.index({
      index: "articles",
      document: { title: "Docker 入门", content: "学习 Docker 容器化" },
    });
    await client.index({
      index: "articles",
      document: { title: "Elasticsearch 搜索", content: "全文搜索引擎" },
    });
    await client.indices.refresh({ index: "articles" });
    console.log("索引初始化完成");
  }
}
init();

app.get("/search", async (req, res) => {
  const q = req.query.q || "";
  const result = await client.search({
    index: "articles",
    query: { match: { title: q } },
  });
  res.json(result.hits.hits.map((h) => h._source));
});

app.listen(3000, () => console.log("ES search demo on 3000"));
