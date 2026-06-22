FROM node:18-alpine
WORKDIR /app
COPY package.json ./
RUN npm install --production
COPY app.js ./
EXPOSE 3000

HEALTHCHECK --interval=5s --timeout=3s --start-period=10s --retries=3 \
  CMD wget -q --spider http://localhost:3000/health || exit 1

CMD ["node", "app.js"]
