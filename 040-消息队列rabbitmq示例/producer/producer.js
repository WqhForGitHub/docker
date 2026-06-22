const amqp = require("amqplib");
const QUEUE = "tasks";

async function main() {
  await new Promise((r) => setTimeout(r, 10000)); // 等待 rabbitmq
  const conn = await amqp.connect(process.env.RABBITMQ_URL);
  const ch = await conn.createChannel();
  await ch.assertQueue(QUEUE);
  let i = 0;
  setInterval(() => {
    const msg = `Task-${i++}`;
    ch.sendToQueue(QUEUE, Buffer.from(msg));
    console.log(`发送: ${msg}`);
  }, 2000);
}
main().catch(console.error);
