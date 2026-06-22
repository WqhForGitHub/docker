# 39-定时任务容器demo

在容器中运行 cron 定时任务。

## 使用方法

```bash
docker build -t demo-39-cron .
docker run -d --name cron-demo demo-39-cron

# 查看定时任务日志
docker exec cron-demo cat /var/log/cron.log
```

## 学习要点

- crontab 定时任务配置
- crond 守护进程
- 容器内后台任务
