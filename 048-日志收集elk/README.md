# 48-日志收集elk

ELK (Elasticsearch + Logstash + Kibana) 日志收集系统。

## 使用方法

```bash
docker compose up -d
```

- Elasticsearch: http://localhost:9200
- Kibana: http://localhost:5601
- Logstash: TCP 5044

### 发送日志

```bash
echo '{"message":"test log","level":"info"}' | nc localhost 5044
```

### 查看

在 Kibana 中创建 Index Pattern: `app-logs-*`

## 学习要点

- ELK 栈容器化
- Logstash 管道配置
- 日志索引管理
- Kibana 可视化
