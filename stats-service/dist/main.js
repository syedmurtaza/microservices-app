"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const microservices_1 = require("@nestjs/microservices");
const stats_module_1 = require("./stats.module");
async function bootstrap() {
    const app = await core_1.NestFactory.createMicroservice(stats_module_1.StatsModule, {
        transport: microservices_1.Transport.TCP,
        options: {
            host: '127.0.0.1',
            port: 8877,
        },
    });
    await app.listen();
    console.log('Stats microservice is listening');
}
bootstrap();
//# sourceMappingURL=main.js.map