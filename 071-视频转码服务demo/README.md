# 71-视频转码服务demo

基于 FFmpeg 的视频转码容器服务。

## 使用方法

```bash
docker build -t demo-71-transcode .

# 将视频文件放入目录并转码
docker run --rm -v $(pwd)/videos:/app demo-71-transcode input.mp4
```

转码后的文件会生成在 videos 目录中。

## 学习要点

- FFmpeg 容器化
- ENTRYPOINT 脚本传参
- 挂载目录处理文件
- 视频编码 H.264
