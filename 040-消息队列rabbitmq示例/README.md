# 40-消息队列rabbitmq示例

RabbitMQ 消息队列示例：生产者发送消息，消费者处理消息。

## 使用方法

```bash
docker compose up -d --build

# 查看生产者日志
docker compose logs -f producer

# 查看消费者日志
docker compose logs -f consumer
```

RabbitMQ 管理界面: http://localhost:15672 (admin/admin123)

## 学习要点

- RabbitMQ 容器化部署
- 生产者/消费者模式
- 消息队列异步通信
