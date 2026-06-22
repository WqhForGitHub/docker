#!/bin/sh
echo "=== 容器启动 ==="
echo "PID: $$"
echo "启动时间: $(date)"

trap 'echo "收到终止信号，正在清理..."; exit 0' TERM INT

echo "容器正在运行，等待信号..."
while true; do
  sleep 1
done
