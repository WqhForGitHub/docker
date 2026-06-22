# 29-api网关示例

API 网关示例，统一入口路由到用户服务和产品服务。

## 使用方法

```bash
docker compose up -d --build
curl http://localhost:8080/health
curl http://localhost:8080/users
curl http://localhost:8080/products
```

## 学习要点

- API 网关路由转发
- 中间件日志
- 多微服务统一入口
