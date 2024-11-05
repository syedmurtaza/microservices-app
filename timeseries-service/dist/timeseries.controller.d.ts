import { TimeSeriesService } from './timeseries.service';
export declare class TimeSeriesController {
    private readonly timeSeriesService;
    constructor(timeSeriesService: TimeSeriesService);
    calculateMovingAverage(data: {
        series: any[];
        windowSize: number;
    }): any[];
}
