# 52-etcd分布式存储demo

etcd 分布式键值存储服务部署。

## 使用方法

```bash
docker compose up -d

# 读写键值
docker compose exec etcd etcdctl put mykey "hello etcd"
docker compose exec etcd etcdctl get mykey

# 查看集群状态
docker compose exec etcd etcdctl endpoint status --write-out=table
```

## 学习要点

- etcd 容器化部署
- etcdctl 命令行操作
- 键值存储读写
- 集群配置
