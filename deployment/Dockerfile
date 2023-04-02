FROM node:16-alpine

ENV APP_ROOT /usr/src/app
WORKDIR ${APP_ROOT}

RUN npm update -g npm

COPY ./package*.json ./
RUN apk --no-cache add pkgconfig autoconf automake libtool nasm build-base zlib-dev

RUN npm i

ADD ./ ${APP_ROOT}
RUN npm run build

EXPOSE 4000
CMD ["npm", "run", "start"]
