"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const microservices_1 = require("@nestjs/microservices");
const timeseries_module_1 = require("./timeseries.module");
async function bootstrap() {
    const app = await core_1.NestFactory.createMicroservice(timeseries_module_1.TimeSeriesModule, {
        transport: microservices_1.Transport.TCP,
        options: {
            host: '127.0.0.1',
            port: 8878,
        },
    });
    await app.listen();
    console.log('TimeSeries microservice is listening');
}
bootstrap();
//# sourceMappingURL=main.js.map