# 59-服务编排实战

综合服务编排实战：网关 + 3微服务 + 数据库 + 消息队列 + 监控。

## 架构

```
Gateway(:8080) -> [UserSvc, OrderSvc, PaymentSvc]
                     |           |
                   PostgreSQL   Redis
Monitor(Prometheus:9090)
```

## 使用方法

```bash
docker compose up -d --build
docker compose ps
```

- Gateway: http://localhost:8080
- Prometheus: http://localhost:9090

## 学习要点

- 多服务编排
- 服务依赖管理
- `restart: always` 自动重启
- 监控集成
