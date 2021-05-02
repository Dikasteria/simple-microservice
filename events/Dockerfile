FROM node:14

WORKDIR /query
COPY package*.json ./

RUN npm install

COPY ./ ./

CMD ["npm", "start"]