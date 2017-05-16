FROM node:7.10.0-alpine

WORKDIR /usr/src/app

COPY . .

RUN npm install

EXPOSE 8000

CMD ["npm", "start"]