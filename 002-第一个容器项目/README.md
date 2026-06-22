# 02-第一个容器项目

使用 Nginx 运行一个静态欢迎页面，适合作为第一个容器项目练习。

## 文件说明

- `Dockerfile` - 基于 nginx:alpine 构建镜像
- `index.html` - 欢迎页面

## 使用方法

```bash
docker build -t demo-02-first .
docker run -d -p 8080:80 demo-02-first
```

访问 http://localhost:8080 查看页面。

## 学习要点

- `COPY` 复制文件到镜像
- `EXPOSE` 声明端口
- 后台运行容器 `-d`
- 端口映射 `-p`
