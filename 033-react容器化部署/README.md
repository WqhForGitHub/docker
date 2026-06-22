# 33-react容器化部署

React 前端项目容器化部署示例。

## 使用方法

```bash
docker build -t demo-33-react .
docker run -d -p 8080:80 demo-33-react
```

## 学习要点

- React 多阶段构建
- Nginx 静态资源服务
- 生产环境部署
