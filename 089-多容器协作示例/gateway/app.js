const http = require("http");

http
  .createServer((req, res) => {
    const isServiceA = req.url.startsWith("/a");
    const target = isServiceA ? process.env.SERVICE_A_URL : process.env.SERVICE_B_URL;

    // 转发请求到后端服务
    const proxyReq = http.request(target + req.url.replace(/^\/[ab]/, ""), (proxyRes) => {
      res.writeHead(proxyRes.statusCode, proxyRes.headers);
      proxyRes.pipe(res);
    });

    proxyReq.on("error", (err) => {
      res.writeHead(502, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ error: "Bad Gateway", detail: err.message }));
    });

    req.pipe(proxyReq);
  })
  .listen(8080, () => console.log("Gateway on 8080"));
