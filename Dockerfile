FROM node:18-alpine as build-stage

WORKDIR /app

# 复制package文件
COPY package*.json ./

# 安装所有依赖（包括devDependencies，因为需要vite等构建工具）
RUN npm install

# 复制源码
COPY . .

# 构建参数
ARG BUILD_ENV=production
ARG API_URL=http://localhost:8080

# 设置环境变量
ENV VITE_API_URL=$API_URL
ENV NODE_ENV=$BUILD_ENV

# 根据环境选择构建命令
RUN if [ "$BUILD_ENV" = "development" ] ; then \
      npm run build:dev ; \
    else \
      npm run build:prod ; \
    fi

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