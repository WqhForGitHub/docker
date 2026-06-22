# 81-项目模板合集

Docker 项目模板合集，包含多种技术栈的快速启动模板。

## 模板列表

| 模板        | 技术栈            | 说明          |
| ----------- | ----------------- | ------------- |
| node-api    | Node.js + Express | REST API 模板 |
| python-web  | Python + Flask    | Web 服务模板  |
| static-site | Nginx             | 静态站点模板  |
| fullstack   | Node + PG         | 全栈模板      |

## 使用方法

```bash
# 使用 Node.js API 模板
cd templates/node-api
docker build -t my-api .

# 使用 Python Web 模板
cd templates/python-web
docker build -t my-web .

# 使用静态站点模板
cd templates/static-site
docker build -t my-site .
```
