# 57-容器安全扫描demo

容器安全扫描示例，使用 Trivy 扫描镜像漏洞。

## 使用方法

```bash
# 构建镜像
docker build -t demo-57-security .

# 使用 Trivy 扫描漏洞
docker run --rm -v /var/run/docker.sock:/var/run/docker.sock aquasec/trivy image demo-57-security

# 查看镜像信息
docker inspect demo-57-security | grep -A5 "User"
```

## 安全实践

- 使用非 root 用户运行（`USER node`）
- 使用 alpine 轻量镜像
- 定期扫描漏洞
- 最小权限原则

## 学习要点

- 容器安全扫描
- 非 root 用户运行
- Trivy 漏洞扫描
- 镜像安全加固
