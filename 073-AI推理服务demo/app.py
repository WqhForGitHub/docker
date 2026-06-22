import numpy as np
from flask import Flask, request, jsonify

app = Flask(__name__)


# 模拟模型推理
def mock_inference(input_data):
    """模拟 AI 模型推理（实际替换为真实模型）"""
    data = np.array(input_data)
    # 模拟推理: 返回数据的统计特征
    result = {
        "mean": float(np.mean(data)),
        "std": float(np.std(data)),
        "max": float(np.max(data)),
        "min": float(np.min(data)),
        "prediction": "positive" if np.mean(data) > 0.5 else "negative",
    }
    return result


@app.route("/predict", methods=["POST"])
def predict():
    data = request.json.get("input", [0.1, 0.2, 0.3])
    result = mock_inference(data)
    return jsonify({"input": data, "result": result})


@app.route("/health", methods=["GET"])
def health():
    return jsonify({"status": "ready", "model": "mock-v1"})


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)
