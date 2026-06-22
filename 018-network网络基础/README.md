# 18-network网络基础

演示 Docker 网络基础，两个容器通过自定义网络通信。

## 使用方法

```bash
docker compose up -d

# 进入 app1 测试与 app2 的网络连通
docker compose exec app1 ping app2

# 查看网络
docker network ls
docker network inspect 18-network网络基础_demo-net
```

## 学习要点

- `networks` 自定义网络
- bridge 网络驱动
- 容器间通过服务名通信
- `docker network` 网络管理
