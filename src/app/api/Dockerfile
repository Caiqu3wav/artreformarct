FROM node:latest

WORKDIR /api

COPY package.json .
COPY package-lock.json .

RUN npm ci --only=production

COPY . .

EXPOSE 5000

CMD ["node", "sender/route.js"]
