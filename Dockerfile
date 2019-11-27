FROM node:12.13.0-alpine as build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY webpack.*.js ./
COPY public ./public
COPY src ./src
RUN npm run build

FROM nginx:1.17.5-alpine
COPY --from=build app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
