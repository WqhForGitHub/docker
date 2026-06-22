# 80-api聚合服务

API 聚合服务，并行请求多个外部 API 并合并结果。

## 使用方法

```bash
docker build -t demo-80-aggregator .
docker run -d -p 3000:3000 demo-80-aggregator

# 聚合查询
curl http://localhost:3000/aggregate
```

## 学习要点

- API 聚合/BFF 模式
- Promise.allSettled 并行请求
- 容错处理
- 数据合并
