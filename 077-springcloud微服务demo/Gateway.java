import com.sun.net.httpserver.*;
import java.io.*;
import java.net.*;
import java.util.concurrent.*;

public class Gateway {

    public static void main(String[] args) throws Exception {
        HttpServer server = HttpServer.create(new InetSocketAddress(8080), 0);

        // 模拟服务路由
        server.createContext("/user", (exchange) -> proxy(exchange, "user-service", 3001));
        server.createContext("/order", (exchange) -> proxy(exchange, "order-service", 3002));
        server.createContext("/payment", (exchange) -> proxy(exchange, "payment-service", 3003));

        server.createContext("/", (exchange) -> {
            String res =
                "{\"gateway\":\"springcloud-demo\",\"routes\":[\"/user\",\"/order\",\"/payment\"]}";
            sendJson(exchange, res);
        });

        server.setExecutor(Executors.newCachedThreadPool());
        server.start();
        System.out.println("Spring Cloud Gateway on :8080");
    }

    static void proxy(HttpExchange exchange, String host, int port) throws IOException {
        String res =
            "{\"service\":\"" + host + "\",\"port\":" + port + ",\"status\":\"available\"}";
        sendJson(exchange, res);
    }

    static void sendJson(HttpExchange exchange, String json) throws IOException {
        exchange.getResponseHeaders().set("Content-Type", "application/json");
        exchange.sendResponseHeaders(200, json.length());
        exchange.getResponseBody().write(json.getBytes());
        exchange.getResponseBody().close();
    }
}
