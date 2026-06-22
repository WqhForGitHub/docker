FROM node:18-alpine
WORKDIR /app
ENV NODE_ENV=production
ENV ES_HOST=elasticsearch:9200
ENV ES_INDEX=documents
ENV SEARCH_PAGE_SIZE=10
COPY package.json ./
RUN npm install --production
COPY app.js ./
EXPOSE 3000
CMD ["node", "app.js"]
