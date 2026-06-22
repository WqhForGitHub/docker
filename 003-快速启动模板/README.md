# 03-快速启动模板

一个可快速启动的 Node.js + Express 模板，开箱即用。

## 使用方法

```bash
docker build -t demo-03-template .
docker run -d -p 3000:3000 demo-03-template
```

## 学习要点

- `WORKDIR` 设置工作目录
- `RUN` 执行安装命令
- 分层构建优化（先复制 package.json 再 install）
