"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const gateway_module_1 = require("./gateway.module");
async function bootstrap() {
    const app = await core_1.NestFactory.create(gateway_module_1.GatewayModule);
    await app.listen(3000);
    console.log(`Gateway is running on: ${await app.getUrl()}`);
}
bootstrap();
//# sourceMappingURL=main.js.map