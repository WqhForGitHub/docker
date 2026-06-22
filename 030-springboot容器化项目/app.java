import com.sun.net.httpserver.HttpExchange;
import com.sun.net.httpserver.HttpHandler;
import com.sun.net.httpserver.HttpServer;
import java.io.*;
import java.net.*;

public class App {

    public static void main(String[] args) throws IOException {
        HttpServer server = HttpServer.create(new InetSocketAddress(8080), 0);
        server.createContext("/", new Handler());
        server.start();
        System.out.println("SpringBoot Demo on :8080 (轻量模拟)");
    }

    static class Handler implements HttpHandler {

        public void handle(HttpExchange exchange) throws IOException {
            String res = "{\"app\":\"springboot-demo\",\"status\":\"running\"}";
            exchange.sendResponseHeaders(200, res.length());
            exchange.getResponseBody().write(res.getBytes());
            exchange.getResponseBody().close();
        }
    }
}
