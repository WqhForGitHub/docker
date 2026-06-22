# 08-compose入门demo

Docker Compose 入门示例，使用一个 Nginx 服务。

## 使用方法

```bash
# 启动服务
docker compose up -d

# 查看状态
docker compose ps

# 停止服务
docker compose down
```

访问 http://localhost:8080

## 学习要点

- `docker-compose.yml` 编写
- `services` 定义服务
- `volumes` 挂载目录
- `ports` 端口映射
