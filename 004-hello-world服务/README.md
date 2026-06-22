# 04-hello-world服务

使用官方 hello-world 镜像验证 Docker 环境是否正常。

## 使用方法

```bash
# 直接运行官方镜像
docker run --rm hello-world

# 或使用本目录构建
docker build -t demo-04-hello .
docker run --rm demo-04-hello
```

## 学习要点

- 验证 Docker 安装
- 理解镜像拉取与运行流程
- `--rm` 容器退出后自动删除
