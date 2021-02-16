FROM node:14.4.0

# Create app directory
WORKDIR /usr/app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build
WORKDIR ./dist

EXPOSE 8002

CMD node src/app.js