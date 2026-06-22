FROM node:18-alpine
LABEL maintainer="demo" version="1.0"
WORKDIR /app
COPY package*.json ./
RUN npm ci --production
COPY src/ ./src/
EXPOSE 3000
HEALTHCHECK --interval=30s --timeout=3s CMD wget -q --spider http://localhost:3000/health || exit 1
USER node
CMD ["node", "src/app.js"]
