# 97-安全加固示例

Docker 容器安全加固示例。

## 使用方法

```bash
docker build -t demo-97-security .

# 只读文件系统运行
docker run -d -p 3000:3000 --read-only --tmpfs /tmp demo-97-security

# 限制权限
docker run -d -p 3000:3000 \
  --read-only \
  --cap-drop ALL \
  --security-opt no-new-privileges \
  --memory="256m" \
  --cpus="0.5" \
  demo-97-security

curl http://localhost:3000
```

## 安全加固清单

- 非 root 用户运行
- `--read-only` 只读文件系统
- `--cap-drop ALL` 移除所有能力
- `--security-opt no-new-privileges` 禁止提权
- 资源限制
- 安全响应头
- `npm cache clean` 清理缓存
- HEALTHCHECK 健康检查
- `--chown` 文件权限

## 学习要点

- 容器安全加固
- 最小权限原则
- 安全头设置
- 只读文件系统
