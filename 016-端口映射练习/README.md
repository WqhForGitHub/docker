# 16-端口映射练习

练习 Docker 端口映射，将容器端口映射到主机不同端口。

## 使用方法

```bash
docker build -t demo-16-port .

# 映射到 9090
docker run -d -p 9090:80 demo-16-port

# 映射到随机端口
docker run -d -p 80 demo-16-port

# 查看端口映射
docker ps
```

## 学习要点

- `-p 主机端口:容器端口` 端口映射
- `-p 容器端口` 随机映射主机端口
- `docker port` 查看端口映射
