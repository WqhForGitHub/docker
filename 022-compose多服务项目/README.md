# 22-compose多服务项目

Web + API + Redis 三层多服务 Compose 项目。

## 使用方法

```bash
docker compose up -d --build
docker compose ps
```

- Web: http://localhost:8080
- API: http://localhost:3000

## 学习要点

- `depends_on` 服务依赖
- 多服务构建
- 三层架构编排
