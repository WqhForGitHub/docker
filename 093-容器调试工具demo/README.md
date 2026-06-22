# 93-容器调试工具demo

容器调试工具箱，包含常用网络和系统调试工具。

## 使用方法

```bash
docker build -t demo-93-debug .

# 交互式进入
docker run -it --rm demo-93-debug shell

# 检查 URL
docker run --rm demo-93-debug check http://example.com

# 加入容器网络调试
docker run -it --rm --network container:target-container demo-93-debug shell
```

## 学习要点

- 调试工具安装
- ENTRYPOINT 参数处理
- `--network container:` 共享网络命名空间
- 容器间调试
