FROM node:18-alpine
LABEL maintainer="security-demo"

# 创建非 root 用户
RUN addgroup -g 1001 -S appgroup \
  && adduser -u 1001 -S appuser -G appgroup

WORKDIR /app

# 复制文件并设置权限
COPY --chown=appuser:appgroup package*.json ./
RUN npm ci --production \
  && npm cache clean --force \
  && rm -rf /tmp/* /root/.npm

COPY --chown=appuser:appgroup app.js ./

# 安全配置
USER appuser
EXPOSE 3000
HEALTHCHECK --interval=30s --timeout=3s --retries=3 \
  CMD wget -q --spider http://localhost:3000/health || exit 1

# 只读文件系统运行
CMD ["node", "app.js"]
