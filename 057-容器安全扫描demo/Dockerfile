FROM node:18-alpine
WORKDIR /app
ENV NODE_ENV=production
ENV SECURITY_SCAN=true
ENV SCAN_SEVERITY=high
COPY package.json ./
RUN npm install --production
COPY app.js ./
EXPOSE 3000
USER node
CMD ["node", "app.js"]
