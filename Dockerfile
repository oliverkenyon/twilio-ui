FROM ubuntu:xenial

EXPOSE 8080
EXPOSE 8001
EXPOSE 8002

COPY package.json /app/
COPY webpack.config.js /app/
COPY tsconfig.json /app/
COPY typings.json /app/
COPY webpack.config.js /app/
COPY server.js /app/
COPY src/ /app/src/
COPY custom_typings/ /app/custom_typings/
COPY index.html /app/

RUN apt-get update && apt-get install -y nodejs npm
RUN ln -s /usr/bin/nodejs /usr/bin/node

WORKDIR /app
RUN npm set progress=false; npm install --unsafe-perm && npm cache clean
RUN rm -rf src/

ENTRYPOINT ["npm", "start"]
