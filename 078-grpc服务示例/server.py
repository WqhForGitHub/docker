import grpc
from concurrent import futures
import time

# 简化版 gRPC 服务（无 proto 编译，使用直接通信模拟）
from http.server import HTTPServer, BaseHTTPRequestHandler
import json


class gRPCHandler(BaseHTTPRequestHandler):
    def do_POST(self):
        content_length = int(self.headers["Content-Length"])
        body = json.loads(self.rfile.read(content_length))

        if self.path == "/Greeter/SayHello":
            name = body.get("name", "World")
            response = {"message": f"Hello {name}!"}
        elif self.path == "/Calculator/Add":
            response = {"result": body.get("a", 0) + body.get("b", 0)}
        else:
            response = {"error": "unknown method"}

        self.send_response(200)
        self.send_header("Content-Type", "application/json")
        self.end_headers()
        self.wfile.write(json.dumps(response).encode())

    def log_message(self, format, *args):
        print(f"[gRPC] {args[0]}")


server = HTTPServer(("0.0.0.0", 50051), gRPCHandler)
print("gRPC 服务运行在 :50051")
server.serve_forever()
