FROM ubuntu:xenial

EXPOSE 8080

COPY package.json /app/
COPY webpack.config.js /app/
COPY build_config.js /app/
COPY config.json /app/
COPY tsconfig.json /app/
COPY typings.json /app/
COPY webpack.config.js /app/
COPY src/ /app/src/
COPY custom_typings/ /app/custom_typings/
COPY index.html /app/

RUN apt-get update && apt-get install -y nodejs npm
RUN ln -s /usr/bin/nodejs /usr/bin/node

WORKDIR /app
RUN npm set progress=false; npm install --unsafe-perm
RUN rm -rf src/

ENTRYPOINT ["./node_modules/.bin/http-server", "."]
