FROM node:20-alpine as build-stage

WORKDIR /app

COPY package*.json ./

ARG VITE_API_URL
ENV VITE_API_URL=$VITE_API_URL

RUN npm install

COPY . .

RUN npm run build

## Production ##
FROM nginx:stable-alpine as production

COPY --from=build-stage /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]