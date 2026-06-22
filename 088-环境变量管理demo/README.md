# 88-环境变量管理demo

Docker 环境变量管理示例。

## 使用方法

```bash
# 方式1: docker run -e
docker build -t demo-88-env .
docker run -d -p 3000:3000 \
  -e APP_NAME=custom \
  -e API_KEY=my-secret \
  demo-88-env

# 方式2: --env-file
docker run -d -p 3000:3000 --env-file .env demo-88-env

# 方式3: docker-compose
docker compose up -d

curl http://localhost:3000
```

## 学习要点

- `-e` 设置环境变量
- `--env-file` 批量加载
- Compose `environment` 配置
- `.env` 文件
- 敏感信息管理
