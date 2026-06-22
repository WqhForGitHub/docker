# 56-蓝绿部署实践

蓝绿部署示例，通过修改 Nginx upstream 切换版本。

## 使用方法

```bash
docker compose up -d --build

# 当前流量到 blue
curl http://localhost

# 切换到 green: 修改 nginx.conf 中 upstream 为 green:3000
# 然后重载 nginx
docker compose exec proxy nginx -s reload

# 验证
curl http://localhost
```

## 学习要点

- 蓝绿部署原理
- Nginx upstream 切换
- 零停机部署
- 版本回滚
