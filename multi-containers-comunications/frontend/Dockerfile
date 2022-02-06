FROM node:16

WORKDIR /front-end

COPY package.json .

RUN npm install

COPY . .

EXPOSE 3000

VOLUME [ "/front-end/node_modules" ]

CMD ["npm", "start"]

# docker run -d --network docker-net -p 3000:3000 -v $(pwd)/:/front-end/ --name front-end --interactive --tty front-end:1