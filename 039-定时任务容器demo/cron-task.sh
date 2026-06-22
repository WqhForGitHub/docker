#!/bin/sh
echo "[$(date)] 定时任务执行: $(hostname)" >> /var/log/cron.log
