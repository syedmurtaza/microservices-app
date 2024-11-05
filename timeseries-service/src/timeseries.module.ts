import { Module } from '@nestjs/common';
import { TimeSeriesController } from './timeseries.controller';
import { TimeSeriesService } from './timeseries.service';

@Module({
    controllers: [TimeSeriesController],
    providers: [TimeSeriesService],
})
export class TimeSeriesModule { }