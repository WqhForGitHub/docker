#!/bin/sh
# 每分钟执行一次
echo "* * * * * /cron-task.sh" | crontab -
echo "定时任务已启动，日志输出到 /var/log/cron.log"
crond -f -l 2
