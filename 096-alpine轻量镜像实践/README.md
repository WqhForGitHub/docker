# 96-alpine轻量镜像实践

使用 Alpine Linux 作为基础镜像的轻量实践。

## 使用方法

```bash
docker build -t demo-96-alpine .

# 查看镜像大小（通常 < 50MB）
docker images demo-96-alpine

docker run -d -p 3000:3000 demo-96-alpine
```

## Alpine 优势

- 镜像体积小（~5MB 基础镜像）
- 安全性高（最小化安装）
- 启动速度快
- `apk` 包管理器

## 注意事项

- 部分依赖可能需要额外编译工具
- glibc vs musl libc 兼容性
- 测试 Alpine 兼容性

## 学习要点

- Alpine 基础镜像
- `apk add` 包管理
- 轻量镜像优势
- 兼容性注意事项
