import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { GatewayController } from './gateway.controller';
import { GatewayResolver } from './gateway.resolver';

@Module({
    imports: [
        ClientsModule.register([
            { name: 'STATS_SERVICE', transport: Transport.TCP, options: { host: 'localhost', port: 8877 } },
            { name: 'TIMESERIES_SERVICE', transport: Transport.TCP, options: { host: 'localhost', port: 8878 } },

        ]),
        GraphQLModule.forRoot<ApolloDriverConfig>({
            driver: ApolloDriver,
            typePaths: ['./**/*.gql'],
        }),
    ],
    controllers: [GatewayController],
    providers: [GatewayResolver],
})
export class GatewayModule { }
