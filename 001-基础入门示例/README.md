# 01-基础入门示例

最简单的 Docker 入门示例，使用 Alpine 镜像输出一句话。

## 文件说明

- `Dockerfile` - 最基础的 Dockerfile

## 使用方法

```bash
# 构建镜像
docker build -t demo-01-hello .

# 运行容器
docker run --rm demo-01-hello
```

## 学习要点

- `FROM` 指定基础镜像
- `LABEL` 添加元数据
- `CMD` 设置默认执行命令
