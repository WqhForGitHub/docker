# 65-笔记应用容器版

笔记应用，数据持久化到 Docker Volume。

## 使用方法

```bash
docker build -t demo-65-notes .
docker run -d -p 3000:3000 -v notes_data:/app/data demo-65-notes
```

访问 http://localhost:3000

## 学习要点

- 文件系统数据持久化
- Volume 数据卷
- CRUD 应用
