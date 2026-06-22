# 99-健康检查机制demo

Docker HEALTHCHECK 健康检查机制示例。

## 使用方法

```bash
# Compose 方式
docker compose up -d

# 查看健康状态
docker ps  # STATUS 列显示 (healthy)
docker inspect --format='{{.State.Health.Status}}' <container>

# 测试就绪检查
curl http://localhost:3000/ready  # 启动5秒内返回 503
```

## HEALTHCHECK 参数

| 参数             | 说明         |
| ---------------- | ------------ |
| `--interval`     | 检查间隔     |
| `--timeout`      | 超时时间     |
| `--start-period` | 启动宽限期   |
| `--retries`      | 失败重试次数 |

## 健康检查状态

- `starting` - 启动中
- `healthy` - 健康
- `unhealthy` - 不健康

## 存活 vs 就绪

- **Liveness** (`/health`): 容器是否活着
- **Readiness** (`/ready`): 是否准备好接收流量

## 学习要点

- HEALTHCHECK 指令
- 健康状态查看
- 存活/就绪探针区别
- 启动宽限期
