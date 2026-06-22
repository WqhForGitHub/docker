# 36-用户认证服务demo

用户注册、登录、JWT 认证服务。

## 使用方法

```bash
docker build -t demo-36-auth .
docker run -d -p 3000:3000 demo-36-auth

# 注册
curl -X POST http://localhost:3000/register -H "Content-Type: application/json" -d '{"username":"admin","password":"123456"}'

# 登录获取 token
curl -X POST http://localhost:3000/login -H "Content-Type: application/json" -d '{"username":"admin","password":"123456"}'

# 访问受保护资源
curl http://localhost:3000/profile -H "Authorization: Bearer <your-token>"
```

## 学习要点

- bcrypt 密码加密
- JWT 签发与验证
- 认证中间件
