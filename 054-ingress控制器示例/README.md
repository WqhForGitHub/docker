# 54-ingress控制器示例

Kubernetes Ingress 控制器路由示例。

## 使用方法

```bash
# 构建镜像
docker build -t demo-54-ingress .

# 在 K8s 集群中部署
kubectl apply -f ingress.yaml

# 配置 hosts: 127.0.0.1 demo.local
# 访问 http://demo.local/api 和 http://demo.local/web
```

## 学习要点

- Ingress 资源定义
- 路径路由
- Nginx Ingress 注解
- 虚拟主机路由
