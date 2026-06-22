FROM node:18-alpine
WORKDIR /app
ARG VERSION=1.0
ENV APP_VERSION=$VERSION
COPY app.js ./
EXPOSE 3000
CMD ["node", "app.js"]
