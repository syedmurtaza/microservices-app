import { NestFactory } from '@nestjs/core';
import { Transport, MicroserviceOptions } from '@nestjs/microservices';
import { StatsModule } from './stats.module';

async function bootstrap() {
    const app = await NestFactory.createMicroservice<MicroserviceOptions>(StatsModule, {
        transport: Transport.TCP,
        options: {
            host: '127.0.0.1',
            port: 8877,
        },
    });
    await app.listen();
    console.log('Stats microservice is listening');
}
bootstrap();