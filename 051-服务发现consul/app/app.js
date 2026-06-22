const express = require("express");
const axios = require("axios");
const app = express();
const CONSUL = process.env.CONSUL_URL;

// 注册服务到 Consul
async function register() {
  await axios.put(`${CONSUL}/v1/agent/service/register`, {
    ID: "app-1",
    Name: "demo-app",
    Address: "app",
    Port: 3000,
    Check: {
      HTTP: "http://app:3000/health",
      Interval: "10s",
    },
  });
  console.log("已注册到 Consul");
}

// 查询服务
app.get("/discover", async (req, res) => {
  const { data } = await axios.get(`${CONSUL}/v1/catalog/service/demo-app`);
  res.json(data);
});

app.get("/health", (req, res) => res.json({ status: "pass" }));
app.get("/", (req, res) => res.json({ app: "consul-demo" }));

setTimeout(register, 5000);
app.listen(3000, () => console.log("App on 3000"));
