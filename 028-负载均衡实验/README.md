# 28-负载均衡实验

Nginx 负载均衡实验，将请求轮询分发到 3 个后端。

## 使用方法

```bash
docker compose up -d
# 多次请求观察负载均衡效果
for i in 1 2 3 4 5 6; do curl http://localhost:8080; done
```

## 学习要点

- `upstream` 负载均衡配置
- 轮询（默认）策略
- 负载均衡验证
