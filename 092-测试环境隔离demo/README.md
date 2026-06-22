# 92-测试环境隔离demo

隔离的测试环境，独立网络 + 临时数据库。

## 使用方法

```bash
docker compose up -d --build

# 查看测试结果
docker compose logs runner

# 访问测试应用
curl http://localhost:3001
```

## 学习要点

- `internal: true` 隔离网络
- `tmpfs` 临时数据库
- 独立测试环境
- 测试运行器容器
