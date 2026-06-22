FROM node:18-alpine
WORKDIR /app
COPY package.json ./
RUN npm install --production
COPY app.js public/ ./
EXPOSE 3000
CMD ["node", "app.js"]
