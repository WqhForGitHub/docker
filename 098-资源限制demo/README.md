# 98-资源限制demo

Docker 容器资源限制示例（CPU + 内存）。

## 使用方法

```bash
# Compose 方式
docker compose up -d

# docker run 方式
docker run -d -p 3000:3000 \
  --memory="256m" \
  --memory-swap="512m" \
  --cpus="0.5" \
  --memory-swappiness=10 \
  demo-98-resource

# 查看资源使用
docker stats
curl http://localhost:3000
```

## 资源限制参数

| 参数                  | 说明           |
| --------------------- | -------------- |
| `--memory` / `-m`     | 内存限制       |
| `--memory-swap`       | 内存+交换限制  |
| `--cpus`              | CPU 核心数限制 |
| `--cpu-shares`        | CPU 权重       |
| `--memory-swappiness` | 交换倾向       |
| `--pids-limit`        | 进程数限制     |

## 学习要点

- 内存限制
- CPU 限制
- `docker stats` 监控
- 资源预留
