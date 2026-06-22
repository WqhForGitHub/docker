# 19-日志查看示例

演示 Docker 容器日志的查看与管理。

## 使用方法

```bash
docker build -t demo-19-logs .
docker run -d --name log-demo -p 3000:3000 demo-19-logs

# 触发请求产生日志
curl http://localhost:3000
curl http://localhost:3000/test

# 查看日志
docker logs log-demo
docker logs -f log-demo       # 跟踪日志
docker logs --tail 5 log-demo # 最后5行
docker logs -t log-demo       # 显示时间戳
```

## 学习要点

- `docker logs` 查看日志
- `-f` 跟踪日志输出
- `--tail` 限制行数
- `-t` 显示时间戳
