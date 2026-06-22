FROM nginx:alpine
LABEL maintainer="docker-demo"
LABEL description="第一个容器项目 - 静态欢迎页"
COPY index.html /usr/share/nginx/html/index.html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
