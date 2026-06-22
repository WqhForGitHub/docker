# 43-gitlab-runner实践

GitLab Runner 容器化实践，用于 CI/CD 流水线执行。

## 使用方法

```bash
# 构建并注册 Runner
docker compose up -d

# 查看 Runner 状态
docker compose exec runner gitlab-runner verify

# 查看日志
docker compose logs -f runner
```

> 请将 `config.toml` 和 `docker-compose.yml` 中的 `YOUR_TOKEN` 替换为实际 GitLab Runner 注册 Token。

## 学习要点

- GitLab Runner 容器化
- Docker-in-Docker 执行器
- Runner 配置文件
