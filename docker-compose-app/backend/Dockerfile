FROM node

WORKDIR /backend

COPY package.json .

RUN npm install

COPY . .

EXPOSE 80

ENV MONGODB_USERNAME=root \
    MONGODB_PASSWORD=secret

CMD ["npm", "start"]