# 30-springboot容器化项目

Spring Boot 风格的容器化项目（使用轻量 Java HTTP 模拟，无需 Maven 构建）。

## 使用方法

```bash
docker build -t demo-30-springboot .
docker run -d -p 8080:8080 demo-30-springboot
curl http://localhost:8080/
```

> 实际 Spring Boot 项目可替换为打包好的 JAR：
>
> ```dockerfile
> FROM openjdk:17-slim
> COPY target/app.jar /app/app.jar
> CMD ["java", "-jar", "/app/app.jar"]
> ```

## 学习要点

- Java 应用容器化
- JDK 镜像选择
- 编译与运行
