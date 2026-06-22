# 55-灰度发布demo

Nginx 灰度发布示例，80% 流量到 v1，20% 流量到 v2。

## 使用方法

```bash
docker compose up -d --build

# 多次请求观察版本分布
for i in $(seq 1 10); do
  curl http://localhost
  echo
done
```

## 学习要点

- `split_clients` 流量分割
- 灰度发布策略
- 多版本并行
