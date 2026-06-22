# 95-多阶段构建demo

多阶段构建示例：构建阶段编译，运行阶段使用轻量镜像。

## 使用方法

```bash
docker build -t demo-95-multistage .
docker run -d -p 8080:80 demo-95-multistage
```

访问 http://localhost:8080

## 多阶段构建优势

- 最终镜像更小（不含构建工具）
- 安全性更高（不含源码）
- 分离构建与运行环境

```dockerfile
FROM node:18 AS builder # 构建阶段
RUN npm ci && npm run build

FROM nginx:alpine # 运行阶段
COPY --from=builder ... # 仅复制构建产物
```

## 学习要点

- `AS` 命名构建阶段
- `COPY --from=` 跨阶段复制
- 构建与运行分离
- 镜像精简
