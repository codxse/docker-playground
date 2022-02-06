FROM node:14

WORKDIR /backend

COPY package.json .

RUN npm install

COPY . .

EXPOSE 80

CMD ["node", "app.js"]

# docker run --rm --network docker-net -v mongodb-volume:/data/db --name mongodb -d -p 27017:27017 mongo
# docker run -d --name backend --network docker-net -p 5000:80 -v $(pwd)/logs:/backend/logs backend-web:2