FROM alpine:latest
RUN apk add --no-cache curl wget busybox-extras netcat-openbsd bind-tools htop vim
WORKDIR /app
COPY app.sh ./
RUN chmod +x app.sh
ENTRYPOINT ["/app.sh"]
