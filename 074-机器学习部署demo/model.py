import numpy as np
from sklearn.linear_model import LogisticRegression
import pickle
import os

MODEL_PATH = "/app/data/model.pkl"


def train_and_save():
    """训练一个简单的逻辑回归模型并保存"""
    X = np.random.rand(100, 4)
    y = (X.sum(axis=1) > 2).astype(int)
    model = LogisticRegression()
    model.fit(X, y)
    os.makedirs(os.path.dirname(MODEL_PATH), exist_ok=True)
    with open(MODEL_PATH, "wb") as f:
        pickle.dump(model, f)
    return model


def load_model():
    """加载模型"""
    if os.path.exists(MODEL_PATH):
        with open(MODEL_PATH, "rb") as f:
            return pickle.load(f)
    return train_and_save()


model = load_model()
