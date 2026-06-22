# 58-swarm集群示例

Docker Swarm 集群部署示例，3 副本负载均衡。

## 使用方法

```bash
# 初始化 Swarm
docker swarm init

# 部署服务栈
docker stack deploy -c docker-compose.yml demo

# 查看服务
docker service ls
docker service ps demo_web

# 访问（多次请求会轮询不同副本）
curl http://localhost

# 扩展副本
docker service scale demo_web=5

# 清理
docker stack rm demo
docker swarm leave --force
```

## 学习要点

- Docker Swarm 集群
- `deploy` 配置
- 副本扩展
- 滚动更新
- overlay 网络
