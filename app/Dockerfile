FROM node:14

RUN mkdir -p /app/

WORKDIR /src/

COPY package-lock.json /src/

COPY package.json /src/

COPY . /src/

EXPOSE 3000

RUN npm run start