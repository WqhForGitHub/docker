# 49-fluentd日志系统

Fluentd 日志收集系统，收集 Nginx 容器日志。

## 使用方法

```bash
docker compose up -d --build

# 访问 Nginx 产生日志
curl http://localhost:8080

# 查看收集的日志
cat logs/nginx.*.log
```

## 学习要点

- Fluentd 容器化
- Docker fluentd 日志驱动
- 日志路由匹配
- 日志文件输出
