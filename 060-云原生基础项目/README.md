# 60-云原生基础项目

符合云原生原则的基础项目：健康检查、非 root 用户、资源限制、多副本。

## 使用方法

```bash
docker compose up -d --build
curl http://localhost:3000
curl http://localhost:3000/health
```

## 云原生实践

- HEALTHCHECK 健康检查
- 非 root 用户运行
- 资源限制
- 多副本部署
- 就绪/存活探针端点

## 学习要点

- 云原生应用设计原则
- 容器化最佳实践
- 健康检查机制
- 资源限制配置
