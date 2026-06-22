# 31-nodejs-mongo应用

Node.js + MongoDB 全栈应用示例。

## 使用方法

```bash
docker compose up -d --build

# 新增
curl -X POST http://localhost:3000/items -H "Content-Type: application/json" -d '{"name":"test"}'

# 查询
curl http://localhost:3000/items
```

## 学习要点

- MongoDB 容器化
- Mongoose 连接
- Compose 服务依赖
