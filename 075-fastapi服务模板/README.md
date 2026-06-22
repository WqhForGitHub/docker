# 75-fastapi服务模板

FastAPI 服务模板，含自动文档生成。

## 使用方法

```bash
docker build -t demo-75-fastapi .
docker run -d -p 8000:8000 demo-75-fastapi
```

- API: http://localhost:8000
- Swagger 文档: http://localhost:8000/docs
- ReDoc 文档: http://localhost:8000/redoc

## 学习要点

- FastAPI 容器化
- uvicorn ASGI 服务器
- Pydantic 数据验证
- 自动 API 文档
