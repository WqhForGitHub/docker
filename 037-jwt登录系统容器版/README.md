# 37-jwt登录系统容器版

JWT 登录认证系统，容器化部署。

## 使用方法

```bash
docker build -t demo-37-jwt .
docker run -d -p 3000:3000 demo-37-jwt

# 登录 (admin/admin123)
curl -X POST http://localhost:3000/login -H "Content-Type: application/json" -d '{"username":"admin","password":"admin123"}'

# 访问 dashboard
curl http://localhost:3000/dashboard -H "Authorization: Bearer <token>"
```

## 学习要点

- JWT 登录流程
- Token 验证中间件
- 受保护路由
