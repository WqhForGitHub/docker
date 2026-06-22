# 77-springcloud微服务demo

Spring Cloud 微服务网关示例（使用轻量 Java 模拟）。

## 架构

```
Gateway(:8080)
  ├── /user     -> User Service (:3001)
  ├── /order    -> Order Service (:3002)
  └── /payment  -> Payment Service (:3003)
```

## 使用方法

```bash
docker build -t demo-77-springcloud .
docker run -d -p 8080:8080 demo-77-springcloud

curl http://localhost:8080/
curl http://localhost:8080/user
curl http://localhost:8080/order
curl http://localhost:8080/payment
```

## 学习要点

- 微服务网关路由
- 多阶段构建
- Java 应用容器化
- 服务路由模式
