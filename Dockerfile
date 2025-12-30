FROM node:14-alpine3.16

WORKDIR /houseofsixten

COPY . .

RUN npm install

CMD [ "ng", "serve" ]