import { NestFactory } from '@nestjs/core';
import { Transport, MicroserviceOptions } from '@nestjs/microservices';
import { TimeSeriesModule } from './timeseries.module';

async function bootstrap() {
    const app = await NestFactory.createMicroservice<MicroserviceOptions>(TimeSeriesModule, {
        transport: Transport.TCP,
        options: {
            host: '127.0.0.1',
            port: 8878,
        },
    });
    await app.listen();
    console.log('TimeSeries microservice is listening');
}
bootstrap();