import { Controller, Get, Post, Body, Inject } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiBody } from '@nestjs/swagger';
import { ClientProxy } from '@nestjs/microservices';

@Controller('api')
export class GatewayController {
    constructor(
        @Inject('STATS_SERVICE') private statsClient: ClientProxy,
        @Inject('TIMESERIES_SERVICE') private timeseriesClient: ClientProxy,
    ) { }

    @Get('mean')
    @ApiOperation({ summary: 'Calculate mean of numbers' })
    @ApiResponse({ status: 200, description: 'Mean calculated successfully' })
    @ApiBody({ type: [Number] })
    async getMean(@Body() data: number[]) {
        return this.statsClient.send({ cmd: 'calculateMean' }, data);
    }

    @Post('moving-average')
    @ApiOperation({ summary: 'Calculate moving average of a time series' })
    @ApiResponse({ status: 200, description: 'Moving average calculated successfully' })
    @ApiBody({ type: Object, description: '{ series: number[], windowSize: number }' })

    async getMovingAverage(@Body() data: { series: any[], windowSize: number }) {
        return this.timeseriesClient.send({ cmd: 'calculateMovingAverage' }, data);
    }
}