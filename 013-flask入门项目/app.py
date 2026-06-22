from flask import Flask, render_template_string

app = Flask(__name__)

HTML = """
<h1>Flask 入门项目</h1>
<p>访问计数: {{ count }}</p>
<p><a href="/about">关于</a></p>
"""

count = 0


@app.route("/")
def index():
    global count
    count += 1
    return render_template_string(HTML, count=count)


@app.route("/about")
def about():
    return "<h1>关于</h1><p>Flask 入门 Demo</p>"


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)
