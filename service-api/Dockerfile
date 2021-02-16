FROM node:14.4.0

# Create app directory
WORKDIR /usr/app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build
COPY .env ./dist/
WORKDIR ./dist

EXPOSE 8001

CMD node src/app.js