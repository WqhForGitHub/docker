# 10-nginx静态站点

使用 Nginx 托管静态网站，包含自定义配置。

## 使用方法

```bash
docker build -t demo-10-nginx-static .
docker run -d -p 8080:80 demo-10-nginx-static
```

访问 http://localhost:8080

## 学习要点

- Nginx 静态文件托管
- 自定义 nginx 配置文件
- 多文件 COPY
