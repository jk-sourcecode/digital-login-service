FROM node:latest
ARG NODE_ENV=production
ENV COUCHBASE_URL=couchbase://localhost:8091
ENV BUCKET_NAME=wallet
ENV BUCKET_PASSWORD=d1f81842a37ef4ae4c155a78fca1d25d

