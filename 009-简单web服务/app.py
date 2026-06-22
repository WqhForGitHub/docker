from http.server import HTTPServer, SimpleHTTPRequestHandler

PORT = 5000


class Handler(SimpleHTTPRequestHandler):
    def do_GET(self):
        if self.path == "/":
            self.send_response(200)
            self.send_header("Content-Type", "text/html; charset=utf-8")
            self.end_headers()
            self.wfile.write(
                "<h1>简单 Web 服务</h1><p>使用 Python 内置 HTTP 服务器</p>".encode(
                    "utf-8"
                )
            )
        else:
            self.send_response(404)
            self.end_headers()


print(f"Web 服务启动: http://localhost:{PORT}")
HTTPServer(("0.0.0.0", PORT), Handler).serve_forever()
