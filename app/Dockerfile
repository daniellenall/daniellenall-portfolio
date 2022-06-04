FROM node:14

RUN mkdir -p /app/

WORKDIR /app/

COPY package-lock.json /app/

COPY package.json /app/

COPY . /app/

EXPOSE 3000

RUN npm install
