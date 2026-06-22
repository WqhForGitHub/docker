# 32-vue前端部署demo

Vue 前端项目多阶段构建并部署到 Nginx。

## 使用方法

```bash
docker build -t demo-32-vue .
docker run -d -p 8080:80 demo-32-vue
```

访问 http://localhost:8080

## 学习要点

- 多阶段构建（multi-stage build）
- 构建阶段与运行阶段分离
- Nginx 部署前端静态资源
