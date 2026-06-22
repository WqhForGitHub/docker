FROM openjdk:17-slim
WORKDIR /app
COPY app.java .
RUN javac app.java
EXPOSE 8080
CMD ["java", "App"]
