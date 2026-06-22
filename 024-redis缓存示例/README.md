# 24-redis缓存示例

Node.js + Redis 实现缓存读写示例。

## 使用方法

```bash
docker compose up -d --build
curl http://localhost:3000/cache/user1 # 首次从"DB"获取
curl http://localhost:3000/cache/user1 # 第二次从缓存获取
```

## 学习要点

- Redis 缓存读写
- 缓存过期时间设置
- Compose 服务间环境变量传递
