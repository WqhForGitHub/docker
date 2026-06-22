# 87-多环境配置示例

多环境配置示例：development / staging / production。

## 使用方法

```bash
# 同时启动三个环境
docker compose up -d

# 分别访问
curl http://localhost:3001 # development
curl http://localhost:3002 # staging
curl http://localhost:3003 # production

# 使用环境文件
docker run --env-file .env.production -p 3000:3000 demo-87-multienv
```

## 学习要点

- 多环境配置管理
- `NODE_ENV` 环境变量
- `.env` 文件
- `--env-file` 使用
