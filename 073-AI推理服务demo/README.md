# 73-AI推理服务demo

AI 推理服务容器化示例（使用模拟模型，可替换为真实模型）。

## 使用方法

```bash
docker build -t demo-73-ai .
docker run -d -p 5000:5000 demo-73-ai

# 健康检查
curl http://localhost:5000/health

# 推理请求
curl -X POST http://localhost:5000/predict \
  -H "Content-Type: application/json" \
  -d '{"input": [0.8, 0.6, 0.9]}'
```

## 替换为真实模型

```dockerfile
FROM tensorflow/serving:latest
COPY models/ /models/
CMD ["--model_name=my_model", "--model_base_path=/models/my_model"]
```

## 学习要点

- AI 推理服务容器化
- Flask API 暴露
- 模型加载与推理
- 健康检查端点
