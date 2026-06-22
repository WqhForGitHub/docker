FROM jrottenberg/ffmpeg:alpine
WORKDIR /app
ENV VIDEO_CODEC=h264
ENV VIDEO_BITRATE=2000k
ENV VIDEO_RESOLUTION=720p
ENV PRESET=medium
COPY transcode.sh /transcode.sh
RUN chmod +x /transcode.sh
ENTRYPOINT ["/transcode.sh"]
