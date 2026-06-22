const amqp = require("amqplib");
const QUEUE = "tasks";

async function main() {
  await new Promise((r) => setTimeout(r, 10000));
  const conn = await amqp.connect(process.env.RABBITMQ_URL);
  const ch = await conn.createChannel();
  await ch.assertQueue(QUEUE);
  ch.consume(QUEUE, (msg) => {
    console.log(`处理: ${msg.content.toString()}`);
    ch.ack(msg);
  });
  console.log("消费者等待消息...");
}
main().catch(console.error);
