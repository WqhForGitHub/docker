# 20-Dockerfile基础语法练习

练习 Dockerfile 的各种基础指令。

## 使用方法

```bash
docker build -t demo-20-dockerfile .
docker run --rm demo-20-dockerfile
docker run --rm demo-20-dockerfile custom-arg
```

## 学习要点

- `FROM` 基础镜像
- `LABEL` 标签
- `ENV` 环境变量
- `WORKDIR` 工作目录
- `RUN` 执行命令
- `COPY` 复制文件
- `ENTRYPOINT` 入口点
- `CMD` 默认参数
- ENTRYPOINT 与 CMD 的配合
