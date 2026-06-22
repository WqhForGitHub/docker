FROM node:18-alpine
WORKDIR /app
ENV NODE_ENV=production
ENV CI=true
ENV PORT=3000
COPY package.json ./
RUN npm install --production
COPY app.js ./
EXPOSE 3000
HEALTHCHECK --interval=30s --timeout=3s CMD wget -q --spider http://localhost:3000/health || exit 1
CMD ["node", "app.js"]
