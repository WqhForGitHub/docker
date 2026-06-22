FROM openjdk:17-slim AS build
WORKDIR /app
COPY Gateway.java ./
RUN javac Gateway.java

FROM openjdk:17-slim
WORKDIR /app
COPY --from=build /app/*.class ./
EXPOSE 8080
CMD ["java", "Gateway"]
