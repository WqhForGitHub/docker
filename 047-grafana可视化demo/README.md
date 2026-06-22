# 47-grafana可视化demo

Grafana + Prometheus 数据可视化示例。

## 使用方法

```bash
docker compose up -d
```

- Grafana: http://localhost:3000 (admin/admin)
- Prometheus: http://localhost:9090

### 配置数据源

1. 登录 Grafana
2. 添加数据源 -> Prometheus
3. URL: `http://prometheus:9090`
4. 保存并测试

### 创建仪表盘

添加面板，查询 `up` 或其他 Prometheus 指标。

## 学习要点

- Grafana 容器化
- 数据源配置
- 仪表盘可视化
- Prometheus + Grafana 配合
