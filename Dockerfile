    FROM node:20
    WORKDIR /app1
    COPY . /app1
    RUN npm install readline-sync
    CMD ["node", "test.js"]