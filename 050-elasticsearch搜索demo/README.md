# 50-elasticsearch搜索demo

Elasticsearch 全文搜索示例，Node.js 应用提供搜索 API。

## 使用方法

```bash
docker compose up -d --build

# 等待初始化完成（约15秒）
sleep 15

# 搜索
curl "http://localhost:3000/search?q=Docker"
curl "http://localhost:3000/search?q=Elasticsearch"
```

## 学习要点

- Elasticsearch 容器化
- 索引创建与文档写入
- 全文搜索查询
- Node.js ES 客户端
