# 17-volume数据挂载demo

演示 Docker Volume 数据挂载，实现数据持久化。

## 使用方法

```bash
docker build -t demo-17-volume .

# 绑定挂载目录
docker run -d -p 8080:80 -v $(pwd)/html:/usr/share/nginx/html demo-17-volume

# 使用命名 volume
docker volume create mydata
docker run -d -p 8081:80 -v mydata:/usr/share/nginx/html demo-17-volume
```

## 学习要点

- `-v 主机路径:容器路径` 绑定挂载
- `-v 卷名:容器路径` 命名卷
- `docker volume` 卷管理
- `VOLUME` 指令声明
