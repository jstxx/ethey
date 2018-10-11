FROM node:10-alpine

MAINTAINER Justin Savory <j@jestics.com> <https://github.com/jstxx>

# create app dir in container
RUN mkdir -p /app

# use /app directory as working dir
WORKDIR /app

# copy to /app in container
COPY . /app/

# expose port 8080
EXPOSE 8080

# cmd to start service
CMD ["npm", "start", "--no-daemon"]
