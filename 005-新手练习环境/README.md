# 05-新手练习环境

提供一个交互式的 Ubuntu 容器环境，用于练习 Docker 基本命令。

## 使用方法

```bash
docker build -t demo-05-practice .

# 交互式进入容器
docker run -it --rm demo-05-practice

# 在容器内练习常用命令
ls
cat /etc/os-release
apt update && apt install -y curl
```

## 学习要点

- 交互式运行 `-it`
- `--rm` 自动清理
- 容器内执行命令
