# 90-最小可运行服务

最小可运行的 Docker 服务，仅使用 Node.js 内置模块。

## 使用方法

```bash
docker build -t demo-90-minimal .
docker run -d -p 3000:3000 demo-90-minimal
curl http://localhost:3000
```

## 学习要点

- 最小 Dockerfile
- 零依赖服务
- 快速启动
- 最小化原则
