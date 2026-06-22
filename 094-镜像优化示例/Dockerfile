FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --production && npm cache clean --force
COPY app.js ./
EXPOSE 3000
USER node
CMD ["node", "app.js"]
