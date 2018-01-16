FROM node:latest
ARG NODE_ENV=development
ENV COUCHBASE_URL=couchbase://localhost:8091
ENV BUCKET_NAME=wallet
ENV BUCKET_PASSWORD=d1f81842a37ef4ae4c155a78fca1d25d
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY ["package.json", "/usr/src/app/"]
COPY ["src", "/usr/src/app/src"]
COPY ["index.js", "/usr/src/app/"]
COPY ["swagger.yaml", "/usr/src/app/"]
RUN npm install
EXPOSE 5050
CMD ["npm", "start"]
