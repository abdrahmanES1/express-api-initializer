FROM node:18-alpine


WORKDIR /usr/src/app

COPY . ./
RUN npm i 
RUN npm pack
RUN npm i -g express-api-initializer-2.0.0.tgz

CMD ["express-initializer","new","generated-app"]
CMD ["cd","generate-dapp"]
CMD ["npm","install"]
CMD ["npm","run","start"]