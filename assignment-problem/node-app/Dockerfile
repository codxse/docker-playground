FROM node:16.13.2

WORKDIR /webapp

COPY package.json .

RUN npm install

COPY . .

EXPOSE 3000

CMD ["node", "server.js"]

# 1
# docker build -t webapp:version-1 .

# 2
# docker run -p 4000:3000 -d --name webapp webapp:version-1
# docker container stop webapp

# 3
# dcoker container start webapp
# docker container stop webapp

# 4
# docker container rm webapp // docker rm webapp
# docker image rm webapp:version-1 // docker rmi webapp:version-1

# 6
# docker build -t webapp:version-1 .
# docker run -d -p 3000:3000 --rm --name webapp webapp:version-1
# docker stop webapp