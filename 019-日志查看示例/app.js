const http = require("http");
const server = http.createServer((req, res) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  res.writeHead(200);
  res.end("OK\n");
});
server.listen(3000, () => console.log("日志示例服务启动于 3000 端口"));
