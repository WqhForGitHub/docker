# 14-express基础API

Express 实现的 CRUD REST API。

## 使用方法

```bash
docker build -t demo-14-express-api .
docker run -d -p 3000:3000 demo-14-express-api
```

## API 端点

- `GET /api/items` - 获取列表
- `POST /api/items` - 新增（body: JSON）
- `DELETE /api/items/:id` - 删除

## 学习要点

- RESTful API 设计
- JSON 中间件
- CRUD 操作
