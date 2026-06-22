import os
from flask import Flask, jsonify

app = Flask(__name__)


@app.route("/")
def index():
    return jsonify({"app": "python-basic", "env": os.environ.get("APP_ENV", "dev")})


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)
