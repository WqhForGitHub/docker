# 69-短链接生成服务

短链接生成与跳转服务，数据持久化到文件。

## 使用方法

```bash
docker build -t demo-69-shortener .
docker run -d -p 3000:3000 -v url_data:/app/data demo-69-shortener
```

访问 http://localhost:3000

## 学习要点

- 短链接生成算法
- URL 重定向
- 文件存储持久化
