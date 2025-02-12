FROM node:20.16.0-alpine

WORKDIR /dist/src/app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

EXPOSE 3006

CMD ["npm", "start", "start:prod"]