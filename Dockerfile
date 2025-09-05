FROM node:18-alpine as build-stage

WORKDIR /app

# 复制package文件
COPY package*.json ./

# 安装依赖
RUN npm ci --only=production

# 复制源码
COPY . .

# 构建参数
ARG BUILD_ENV=production
ARG API_URL=http://localhost:8080

# 设置环境变量
ENV VITE_API_URL=$API_URL
ENV NODE_ENV=$BUILD_ENV

# 构建应用
RUN npm run build:prod

# 生产阶段
FROM nginx:alpine as production-stage

# 复制构建结果
COPY --from=build-stage /app/dist /usr/share/nginx/html

# 复制nginx配置
COPY nginx.conf /etc/nginx/conf.d/default.conf

# 暴露端口
EXPOSE 80

# 启动nginx
CMD ["nginx", "-g", "daemon off;"]