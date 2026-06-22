# 82-标准工程结构demo

标准 Docker 工程结构示例。

## 目录结构

```
82-标准工程结构demo/
├── Dockerfile           # 多阶段构建 + 健康检查 + 非 root
├── docker-compose.yml   # 编排配置
├── package.json         # 依赖管理
├── README.md
└── src/
    └── app.js           # 源代码
```

## 使用方法

```bash
docker compose up -d --build
```

## 标准实践

- `npm ci` 生产安装
- 源码放 `src/` 目录
- `HEALTHCHECK` 健康检查
- 非 root 用户
- `restart` 策略
- `NODE_ENV` 环境变量
