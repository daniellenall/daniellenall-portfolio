FROM node:14

RUN mkdir -p /app/

WORKDIR /app/

COPY yarn.lock /app/

COPY package.json /app/

COPY . /app/

EXPOSE 3000

RUN yarn install
