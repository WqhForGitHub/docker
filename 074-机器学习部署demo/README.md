# 74-机器学习部署demo

scikit-learn 机器学习模型部署示例，训练、保存、加载、推理。

## 使用方法

```bash
docker build -t demo-74-ml .
docker run -d -p 5000:5000 -v ml_data:/app/data demo-74-ml

# 推理
curl -X POST http://localhost:5000/predict \
  -H "Content-Type: application/json" \
  -d '{"features": [[0.8, 0.9, 0.7, 0.6]]}'
```

## 学习要点

- ML 模型容器化部署
- 模型训练与持久化
- 推理 API 暴露
- 模型版本管理基础
