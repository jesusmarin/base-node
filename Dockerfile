FROM node:14

WORKDIR /contraloria-services

COPY package*.json ./

RUN npm install

COPY . .

CMD ["npm","start"]