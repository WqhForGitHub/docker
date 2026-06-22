FROM openjdk:17-slim AS build
WORKDIR /app
COPY Gateway.java ./
RUN javac Gateway.java

FROM openjdk:17-slim
WORKDIR /app
ENV SPRING_PROFILES_ACTIVE=prod
ENV SERVER_PORT=8080
ENV JAVA_OPTS="-Xmx512m -Xms256m"
COPY --from=build /app/*.class ./
EXPOSE 8080
CMD ["java", "Gateway"]
