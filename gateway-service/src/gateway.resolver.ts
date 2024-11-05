import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Resolver()
export class GatewayResolver {
    constructor(
        @Inject('STATS_SERVICE') private statsClient: ClientProxy,
        @Inject('TIMESERIES_SERVICE') private timeseriesClient: ClientProxy,
    ) { }

    @Query()
    async mean(@Args('numbers') numbers: number[]) {
        return this.statsClient.send({ cmd: 'calculateMean' }, numbers);
    }

    @Mutation()
    async movingAverage(@Args('series') series: number[], @Args('windowSize') windowSize: number) {
        return this.timeseriesClient.send({ cmd: 'calculateMovingAverage' }, { series, windowSize });
    }
}