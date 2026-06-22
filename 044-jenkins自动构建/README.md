# 44-jenkins自动构建

Jenkins 容器化部署，含自动构建流水线配置。

## 使用方法

```bash
docker compose up -d --build

# 获取初始密码
docker compose exec jenkins cat /var/jenkins_home/secrets/initialAdminPassword
```

访问 http://localhost:8080

## 文件说明

- `Dockerfile` - 自定义 Jenkins 镜像
- `plugins.txt` - 预装插件列表
- `Jenkinsfile` - 流水线配置
- `docker-compose.yml` - 含 Docker socket 挂载

## 学习要点

- Jenkins 容器化
- 预装插件
- Docker-in-Docker 构建
- Jenkinsfile 流水线
