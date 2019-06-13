FROM node:10.16.0-alpine

MAINTAINER dannel

# Creating and defining work directory in container
RUN mkdir -p my-app
WORKDIR my-app

# Installing dependencies
COPY ./package.json .
RUN npm install

# Copying src code
COPY app.js .

# Copying db
RUN mkdir -p db
COPY db db

# Copying test
RUN mkdir -p test
COPY test test

EXPOSE 8070
# Confirm node version
RUN node -v 
CMD ['node', 'my-app/app.js']