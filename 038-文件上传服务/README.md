# 38-文件上传服务

使用 Multer 实现的文件上传服务，文件持久化到 Volume。

## 使用方法

```bash
docker build -t demo-38-upload .
docker run -d -p 3000:3000 -v upload_data:/app/uploads demo-38-upload

# 上传文件
curl -X POST http://localhost:3000/upload -F "file=@somefile.txt"

# 访问文件
curl http://localhost:3000/uploads/<filename>
```

## 学习要点

- Multer 文件上传中间件
- `VOLUME` 数据持久化
- 静态文件服务
