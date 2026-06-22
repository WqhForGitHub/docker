# 25-mysql数据库服务

MySQL 8.0 数据库服务，含初始化脚本和数据持久化。

## 使用方法

```bash
docker compose up -d

# 连接 MySQL
docker compose exec mysql mysql -u demouser -pdemopass demo

# 或从主机连接
mysql -h 127.0.0.1 -P 3306 -u demouser -pdemopass demo

# 查看数据
SELECT * FROM users
```

## 学习要点

- MySQL 容器环境变量配置
- `docker-entrypoint-initdb.d` 自动执行初始化 SQL
- Volume 数据持久化
