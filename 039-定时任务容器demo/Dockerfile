FROM alpine:latest
RUN apk add --no-cache busybox-suid
COPY cron-task.sh /cron-task.sh
RUN chmod +x /cron-task.sh
COPY entrypoint.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh
ENTRYPOINT ["/entrypoint.sh"]
