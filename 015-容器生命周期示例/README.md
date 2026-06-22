# 15-容器生命周期示例

演示容器的启动、运行、停止等生命周期。

## 使用方法

```bash
docker build -t demo-15-lifecycle .

# 后台启动
docker run -d --name lifecycle-demo demo-15-lifecycle

# 查看日志
docker logs lifecycle-demo

# 优雅停止
docker stop lifecycle-demo

# 清理
docker rm lifecycle-demo
```

## 学习要点

- `docker stop` 发送 SIGTERM 信号
- `trap` 捕获信号实现优雅退出
- 容器启动/停止流程
