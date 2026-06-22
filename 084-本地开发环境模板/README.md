# 84-本地开发环境模板

本地开发环境模板，源码挂载实现热重载。

## 使用方法

```bash
docker compose up
```

修改 `app.js` 后需重启（或配合 nodemon 实现热重载）。

## 学习要点

- 源码 volume 挂载
- node_modules 匿名卷
- 开发环境配置
- `restart: unless-stopped`
