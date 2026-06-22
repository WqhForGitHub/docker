# 91-生产部署模板

生产环境部署模板，含安全、健康检查、资源限制、日志管理。

## 使用方法

```bash
docker compose up -d --build
```

## 生产最佳实践

- 多阶段构建减小镜像
- 非 root 用户运行
- HEALTHCHECK 健康检查
- 资源限制（CPU/内存）
- `restart: always` 自动重启
- 日志轮转配置
- `NODE_ENV=production`
- 多副本部署

## 学习要点

- 生产级 Dockerfile
- 安全加固
- 资源管理
- 日志轮转
