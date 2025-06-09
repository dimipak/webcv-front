FROM node:latest AS builder

WORKDIR /app

COPY package.json .

RUN npm install -g @vue/cli

RUN npm install

COPY . .

# Pass build-time env vars (e.g. VITE_API_URL is safe)
ARG VUE_APP_API_URL
ARG VUE_APP_ADMIN_API_URL
ARG VUE_APP_HOST_HEADER

ENV VUE_APP_API_URL=$VUE_APP_API_URL
ENV VUE_APP_ADMIN_API_URL=$VUE_APP_ADMIN_API_URL
ENV VUE_APP_HOST_HEADER=$VUE_APP_HOST_HEADER

RUN npm run build

FROM nginx:stable-alpine AS server

WORKDIR /usr/share/nginx/html

COPY --from=builder /app/dist .
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Default nginx entrypoint (CMD) is being used