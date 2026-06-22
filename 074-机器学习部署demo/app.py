from flask import Flask, request, jsonify
import numpy as np
from model import model

app = Flask(__name__)


@app.route("/predict", methods=["POST"])
def predict():
    data = request.json.get("features", [[0.5, 0.5, 0.5, 0.5]])
    prediction = model.predict(np.array(data))
    proba = model.predict_proba(np.array(data))
    return jsonify({"prediction": prediction.tolist(), "probability": proba.tolist()})


@app.route("/health")
def health():
    return jsonify({"status": "ok", "model": "logistic-regression"})


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)
