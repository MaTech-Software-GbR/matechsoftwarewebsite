FROM node:14.17.0 AS build

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

# Use a seperate image for testing on a apache server
FROM httpd:2.4

COPY --from=build /app/build/ /usr/local/apache2/htdocs/
