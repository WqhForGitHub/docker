# 78-grpc服务示例

gRPC 风格服务示例（使用 HTTP 模拟 gRPC 通信模式）。

## 使用方法

```bash
docker build -t demo-78-grpc .
docker run -d -p 50051:50051 demo-78-grpc

# SayHello
curl -X POST http://localhost:50051/Greeter/SayHello \
  -H "Content-Type: application/json" -d '{"name":"Docker"}'

# Calculator.Add
curl -X POST http://localhost:50051/Calculator/Add \
  -H "Content-Type: application/json" -d '{"a":10,"b":20}'
```

## 学习要点

- gRPC 服务定义模式
- 方法路由
- 高性能通信概念
- protobuf 概念

> 实际 gRPC 项目需定义 .proto 文件并用 grpcio-tools 生成代码。
