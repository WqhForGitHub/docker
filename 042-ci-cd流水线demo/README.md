# 42-ci-cd流水线demo

CI/CD 流水线示例，包含测试、构建、部署阶段。

## 使用方法

```bash
# 本地测试
docker compose up -d --build

# 模拟 CI 测试
docker run --rm ci-cd-demo npm test
```

## 文件说明

- `.gitlab-ci.yml` - GitLab CI 配置
- `ci-cd.yml` - GitHub Actions 工作流参考
- `Dockerfile` - 含 HEALTHCHECK 健康检查
- `test.js` - 单元测试

## 学习要点

- CI/CD 流水线阶段
- Docker 镜像构建自动化
- 健康检查 HEALTHCHECK
