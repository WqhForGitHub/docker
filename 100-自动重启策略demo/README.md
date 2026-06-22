# 100-自动重启策略demo

Docker 容器自动重启策略示例。

## 使用方法

```bash
docker compose up -d

# 查看三个容器
docker compose ps

# 触发崩溃（容器会自动重启）
curl http://localhost:3001/crash

# 观察重启
docker compose ps
docker compose logs always
```

## 重启策略对比

| 策略             | 说明            | 场景       |
| ---------------- | --------------- | ---------- |
| `no`             | 不重启（默认）  | 临时容器   |
| `always`         | 总是重启        | 生产服务   |
| `unless-stopped` | 除非手动停止    | 开发环境   |
| `on-failure`     | 仅失败时重启    | 批处理任务 |
| `on-failure:3`   | 失败重启最多3次 | 有限重试   |

## 使用示例

```bash
# docker run 方式
docker run -d --restart=always my-app
docker run -d --restart=unless-stopped my-app
docker run -d --restart=on-failure:5 my-app
```

## 学习要点

- `restart` 策略区别
- `always` vs `unless-stopped`
- `on-failure` 限制重试次数
- 容器自愈机制
