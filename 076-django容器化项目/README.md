# 76-django容器化项目

Django 项目容器化示例（使用最小配置运行）。

## 使用方法

```bash
docker build -t demo-76-django .
docker run -d -p 8000:8000 demo-76-django
```

访问 http://localhost:8000

> 实际 Django 项目建议使用 `django-admin startproject` 创建完整项目结构。

## 学习要点

- Django 容器化
- requirements.txt 依赖管理
- Django 运行服务器
- ALLOWED_HOSTS 配置
