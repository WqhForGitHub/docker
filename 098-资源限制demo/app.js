const http = require("http");
http
  .createServer((req, res) => {
    // 显示内存使用情况
    const mem = process.memoryUsage();
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(
      JSON.stringify({
        rss: `${(mem.rss / 1024 / 1024).toFixed(2)} MB`,
        heapUsed: `${(mem.heapUsed / 1024 / 1024).toFixed(2)} MB`,
        heapTotal: `${(mem.heapTotal / 1024 / 1024).toFixed(2)} MB`,
      })
    );
  })
  .listen(3000, () => console.log("Resource limit demo on 3000"));
