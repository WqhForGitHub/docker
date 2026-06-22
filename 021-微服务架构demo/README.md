# 21-微服务架构demo

API Gateway + 用户服务 + 订单服务 的微服务架构示例。

## 架构

```
Client -> API Gateway (:3000)
              |-- /user -> User Service (:3001)
              |-- /order -> Order Service (:3002)
```

## 使用方法

```bash
docker compose up -d --build

# 访问网关
curl http://localhost:3000

# 通过网关访问用户服务
curl http://localhost:3000/user

# 通过网关访问订单服务
curl http://localhost:3000/order
```

## 学习要点

- 微服务拆分
- API Gateway 代理模式
- 服务间网络通信
- Compose 多服务编排
