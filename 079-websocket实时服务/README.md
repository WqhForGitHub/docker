# 79-websocket实时服务

WebSocket 实时数据推送服务。

## 使用方法

```bash
docker build -t demo-79-ws .
docker run -d -p 3000:3000 demo-79-ws
```

访问 http://localhost:3000 ，页面每秒接收实时数据。

## 学习要点

- WebSocket 服务端
- 实时数据推送
- 客户端连接管理
- 消息广播
