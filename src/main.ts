import { NestFactory } from '@nestjs/core';
import { GatewayModule } from '../gateway-service/src/gateway.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';


async function bootstrap() {
    const app = await NestFactory.create(GatewayModule);

    // Swagger setup
    const config = new DocumentBuilder()
        .setTitle('Microservices API')
        .setDescription('The Microservices API description')
        .setVersion('1.0')
        .addTag('microservices')
        .build();
    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('api', app, document);

    // Enable CORS
    app.enableCors();
    await app.listen(3000);
    console.log(`Gateway is running on: ${await app.getUrl()}`);
}
bootstrap();