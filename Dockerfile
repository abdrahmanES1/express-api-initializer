FROM node:18-alpine


WORKDIR /usr/src/app

COPY . ./
RUN npm i 
RUN npm pack
RUN npm i -g express-api-initializer-1.1.2.tgz

# CMD ["express-initializer","new","generate-dapp"]
