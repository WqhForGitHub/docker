# 94-镜像优化示例

Docker 镜像优化示例，减小镜像体积和层数。

## 使用方法

```bash
docker build -t demo-94-optimized .

# 对比镜像大小
docker images demo-94-optimized

# 查看层数
docker history demo-94-optimized
```

## 优化技巧

- 使用 `alpine` 轻量基础镜像
- `npm ci` 替代 `npm install`
- `npm cache clean` 清理缓存
- 合并 RUN 指令减少层数
- `.dockerignore` 排除不必要文件
- 非 root 用户运行
- 仅复制必要文件

## 学习要点

- 镜像体积优化
- 构建缓存清理
- 分层优化
