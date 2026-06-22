#!/bin/sh
echo "=== Dockerfile 语法练习 ==="
echo "参数: $@"
echo ""
cat /app/info.txt
echo ""
echo "环境变量:"
env | grep APP
