FROM node:14

WORKDIR /web

COPY package.json .

RUN npm install

COPY . /web/

EXPOSE 80

CMD ["node", "server.js"]