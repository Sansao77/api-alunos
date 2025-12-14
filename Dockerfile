FROM node:24.12

COPY package*.json ./
RUN npm install

COPY . .
CMD ["sh", "-c", "node ./src/server.ts"]
