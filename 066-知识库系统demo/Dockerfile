FROM node:18-alpine
WORKDIR /app
ENV NODE_ENV=production
ENV KB_TITLE=知识库系统
ENV KB_CACHE_TTL=3600
COPY package.json ./
RUN npm install --production
COPY app.js ./
COPY public/ ./public/
EXPOSE 3000
CMD ["node", "app.js"]
