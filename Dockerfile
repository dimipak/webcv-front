FROM node:latest AS builder

WORKDIR /app

COPY . .

RUN npm install -g @vue/cli

RUN npm install

RUN npm run build

FROM nginx:latest AS server

WORKDIR /usr/share/nginx/html

COPY --from=builder /app/dist .

# Default nginx entrypoint (CMD) is being used