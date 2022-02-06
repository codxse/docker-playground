FROM node:14

WORKDIR /webapp

COPY package.json .

RUN npm install

COPY . .

ENV PORT 80

EXPOSE $PORT

VOLUME [ "/webapp/node_modules" ]

CMD ["node", "server.js"]