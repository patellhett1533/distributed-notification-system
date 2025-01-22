FROM node:latest

WORKDIR /app

COPY package*.json .

RUN npm install

RUN npm i nodemon

COPY . .

CMD npm run start