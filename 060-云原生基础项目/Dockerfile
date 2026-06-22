FROM node:18-alpine
WORKDIR /app
COPY package.json ./
RUN npm install --production
COPY app.js ./
EXPOSE 3000
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD wget -q --spider http://localhost:3000/health || exit 1
USER node
CMD ["node", "app.js"]
