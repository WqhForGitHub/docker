FROM node:18-alpine
WORKDIR /app
COPY package.json ./
RUN npm install --production
COPY app.js ./
COPY public/ ./public/
RUN mkdir -p uploads thumbs
EXPOSE 3000
VOLUME /app/uploads
CMD ["node", "app.js"]
