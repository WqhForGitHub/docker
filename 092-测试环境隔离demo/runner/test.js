const http = require("http");

async function runTests() {
  await new Promise((r) => setTimeout(r, 5000));
  try {
    // 测试健康检查
    const health = await fetch(process.env.APP_URL + "/health");
    console.log("Health check:", health.status === 200 ? "PASS" : "FAIL");

    // 测试根路径
    const root = await fetch(process.env.APP_URL + "/");
    const data = await root.json();
    console.log("Root API:", data.env === "test" ? "PASS" : "FAIL");

    console.log("\n=== 测试完成 ===");
  } catch (err) {
    console.error("测试失败:", err.message);
    process.exit(1);
  }
}

runTests();
