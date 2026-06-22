# 89-多容器协作示例

多容器协作示例：网关 + 服务A + 服务B。

## 使用方法

```bash
docker compose up -d --build

curl http://localhost:8080/a # 转发到 service-a
curl http://localhost:8080/b # 转发到 service-b
```

## 学习要点

- 容器间通信
- 环境变量传递服务地址
- 代理转发
- 多容器协作
