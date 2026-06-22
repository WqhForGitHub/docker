# 07-镜像构建入门

演示 Docker 镜像构建的基本流程，包括 RUN 指令使用。

## 使用方法

```bash
# 构建镜像
docker build -t demo-07-build .

# 查看镜像分层信息
docker history demo-07-build

# 运行容器
docker run --rm demo-07-build
```

## 学习要点

- `docker build` 构建镜像
- `docker history` 查看分层
- `RUN` 指令执行安装
- `apk add` Alpine 包管理
