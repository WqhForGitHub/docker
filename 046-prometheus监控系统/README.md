# 46-prometheus监控系统

Prometheus 监控系统示例，采集 Node.js 应用指标。

## 使用方法

```bash
docker compose up -d --build
```

- Prometheus: http://localhost:9090
- 应用指标: http://localhost:3000/metrics

在 Prometheus 中查询 `http_requests_total` 查看请求计数。

## 学习要点

- Prometheus 容器化
- prom-client 指标暴露
- 抓取配置
- 指标查询
