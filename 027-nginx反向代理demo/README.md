# 27-nginx反向代理demo

Nginx 作为反向代理，将不同路径转发到不同后端服务。

## 使用方法

```bash
docker compose up -d
curl http://localhost/       # 代理默认
curl http://localhost/site1/ # 转发到 web1
curl http://localhost/site2/ # 转发到 web2
```

## 学习要点

- `proxy_pass` 反向代理配置
- 路径路由
- 多后端服务代理
