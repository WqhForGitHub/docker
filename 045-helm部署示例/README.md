# 45-helm部署示例

Helm Chart 部署示例，模板化 K8s 配置。

## 使用方法

```bash
# 构建镜像
docker build -t demo-45-helm .

# 安装 Helm Chart
helm install my-demo ./chart

# 查看状态
helm list
kubectl get all

# 更新配置
helm upgrade my-demo ./chart --set replicaCount=3

# 卸载
helm uninstall my-demo
```

## 学习要点

- Helm Chart 结构
- values.yaml 配置管理
- 模板变量渲染
- Helm install/upgrade/uninstall
