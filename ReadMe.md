# To set up this project structure

Create the root folder: mkdir microservices-project && cd microservices-project
Initialize the root package.json: npm init -y
Create each service folder:

```shell
mkdir gateway-service stats-service timeseries-service
```

For each service, create the src folder and necessary files:

```shell
cd gateway-service && mkdir src && touch src/main.ts src/gateway.module.ts src/gateway.controller.ts && cd ..
cd stats-service && mkdir src && touch src/main.ts src/stats.module.ts src/stats.controller.ts src/stats.service.ts && cd ..
cd timeseries-service && mkdir src && touch src/main.ts src/timeseries.module.ts src/timeseries.controller.ts src/timeseries.service.ts && cd ..
```

Initialize each service with its own package.json:

```shell
cd gateway-service && npm init -y && cd ..
cd stats-service && npm init -y && cd ..
cd timeseries-service && npm init -y && cd ..
```

Install Nest.js and necessary dependencies in each service folder.

```shell
npm run install:all
```

## Now, to set up and run your project

In the root directory, run:

```shell

npm run install:all
```

Build all services:

```shell

npm run build:all
```

Start each service (in separate terminal windows):

```shell

npm run start:gateway
npm run start:stats
npm run start:timeseries
```

```shell
npm run build
```

Start each service (in separate terminal windows):

```shell
npm run start:gateway
npm run start:stats
npm run start:timeseries
```

## Key points about Swagger integration

[-] We use the @nestjs/swagger package to generate OpenAPI (formerly Swagger) documentation.
[-] In main.ts, we set up the Swagger document and UI.
[-] In the controller, we use Swagger decorators like @ApiTags, @ApiOperation, and @ApiResponse to provide metadata for the API documentation.

To view the Swagger UI and interact with the API, you would navigate to <http://localhost:3000/api> in your browser after starting the service.

## Here's how you can call these endpoints

Using cURL (from the command line):

For the mean calculation:

```bash


curl -X GET '<http://localhost:3000/api/mean>' \
-H 'Content-Type: application/json' \
-d '[1, 2, 3, 4, 5]'
For the moving average:
bashCopycurl -X POST '<http://localhost:3000/api/moving-average>' \
-H 'Content-Type: application/json' \
-d '{"series": [1, 2, 3, 4, 5], "windowSize": 3}'
```

Using a tool like Postman:

For the mean calculation:

```shell
Method: GET
URL: <http://localhost:3000/api/mean>
Body: raw, JSON
```

```json
[1, 2, 3, 4, 5]
```

For the moving average:

```
Method: POST
URL: <http://localhost:3000/api/moving-average>
Body: raw, JSON
```

```json
{
  "series": [1, 2, 3, 4, 5],
  "windowSize": 3
}
```
