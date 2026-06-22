# 09-简单web服务

使用 Python 内置库搭建一个简单的 Web 服务。

## 使用方法

```bash
docker build -t demo-09-web .
docker run -d -p 5000:5000 demo-09-web
```

访问 http://localhost:5000

## 学习要点

- Python http.server 模块
- `EXPOSE` 端口声明
- 长驻服务运行
