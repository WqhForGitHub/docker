# 70-图片上传与处理

图片上传与管理服务，支持图片列表查看。

## 使用方法

```bash
docker build -t demo-70-image .
docker run -d -p 3000:3000 -v image_data:/app/uploads demo-70-image
```

访问 http://localhost:3000

## 学习要点

- Multer 图片上传
- 静态文件服务
- Volume 持久化
- 图片管理
