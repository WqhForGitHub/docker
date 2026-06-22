# 41-k8s部署入门项目

可部署到 Kubernetes 的入门 Web 应用，包含 Deployment 和 Service。

## 使用方法

```bash
# 构建 Docker 镜像
docker build -t demo-41-k8s .

# 部署到 K8s
kubectl apply -f k8s.yaml

# 查看状态
kubectl get pods
kubectl get svc

# 访问
curl http:// < node-ip > :30080

# 清理
kubectl delete -f k8s.yaml
```

## 学习要点

- Docker 镜像准备
- K8s Deployment（副本管理）
- K8s Service（服务暴露）
- 资源限制
