# 83-开发环境一键启动

一键启动完整开发环境：Nginx + 前端 + 后端 + PostgreSQL + Redis + Adminer。

## 使用方法

```bash
docker compose up -d
```

- 前端: http://localhost (Nginx 代理) 或 http://localhost:3000
- 后端: http://localhost:5000 或 http://localhost/api/
- Adminer: http://localhost:8080 (dev/devpass/dev)

## 学习要点

- 一键开发环境
- 热重载（volume 挂载源码）
- 多服务编排
- 开发工具集成
