const http = require("http");
let restartCount = 0;

http
  .createServer((req, res) => {
    if (req.url === "/crash") {
      console.log("收到崩溃指令，容器即将退出...");
      process.exit(1);
    }
    if (req.url === "/health") {
      res.writeHead(200);
      res.end(JSON.stringify({ status: "ok", pid: process.pid }));
      return;
    }
    res.writeHead(200);
    res.end(
      JSON.stringify({
        msg: "Auto-restart demo",
        pid: process.pid,
        uptime: process.uptime(),
      })
    );
  })
  .listen(3000, () => console.log(`App PID:${process.pid} on 3000`));
