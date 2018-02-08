FROM node:latest

ENV APP_MAIN app.js

RUN mkdir -p /opt/app
ADD . /opt/app/
RUN cd /opt/app && npm install; exit 0

WORKDIR /opt/app

EXPOSE 3000