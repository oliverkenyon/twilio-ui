## Build

npm install

## Run in development mode

npm run dev

## Package

optionally delete node_modules directory
docker build -t oliverkenyon/twilio-ui .

## Run

Update environment.properties with API_URL and WEBSOCKET_URL

docker run -p 8080:8080 -p 8001:8001 -p 8002:8002 --env-file=environment.properties twilio-ui
