FROM alpine:latest
LABEL description="Dockerfile 基础语法练习"

# 环境变量
ENV APP_NAME=dockerfile-demo
ENV APP_VERSION=1.0

# 工作目录
WORKDIR /app

# 执行命令
RUN apk add --no-cache curl \
  && echo "APP_NAME=${APP_NAME}" > /app/info.txt \
  && echo "APP_VERSION=${APP_VERSION}" >> /app/info.txt

# 复制文件
COPY entrypoint.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh

# 入口点
ENTRYPOINT ["/entrypoint.sh"]
CMD ["default"]
