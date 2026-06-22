# 23-前后端分离部署

前后端分离架构：Nginx 前端 + Node.js 后端 API。

## 使用方法

```bash
docker compose up -d --build
```

访问 http://localhost:8080 ，点击"加载数据"按钮请求后端 API。

## 学习要点

- Nginx 反向代理 `/api/` 到后端
- 前后端容器分离
- Compose 编排多服务
