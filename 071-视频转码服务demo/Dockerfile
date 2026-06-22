FROM jrottenberg/ffmpeg:alpine
WORKDIR /app
COPY transcode.sh /transcode.sh
RUN chmod +x /transcode.sh
ENTRYPOINT ["/transcode.sh"]
