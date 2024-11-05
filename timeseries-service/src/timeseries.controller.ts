import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { TimeSeriesService } from './timeseries.service';

@Controller()
export class TimeSeriesController {
    constructor(private readonly timeSeriesService: TimeSeriesService) { }

    @MessagePattern({ cmd: 'calculateMovingAverage' })
    calculateMovingAverage(data: { series: any[], windowSize: number }): any[] {
        return this.timeSeriesService.calculateMovingAverage(data.series, data.windowSize);
    }
}