#!/bin/sh
# 视频转码: 将输入视频转为 H.264 MP4
if [ $# -lt 1 ]; then
  echo "用法: docker run -v /path:/app demo-71-transcode input.mp4"
  exit 1
fi

INPUT="$1"
OUTPUT="${INPUT%.*}_transcoded.mp4"

echo "开始转码: $INPUT -> $OUTPUT"
ffmpeg -i "/app/$INPUT" -c:v libx264 -preset fast -c:a aac "/app/$OUTPUT" -y
echo "转码完成: $OUTPUT"
