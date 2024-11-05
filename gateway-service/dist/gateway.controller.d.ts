import { ClientProxy } from '@nestjs/microservices';
export declare class GatewayController {
    private statsClient;
    private timeseriesClient;
    constructor(statsClient: ClientProxy, timeseriesClient: ClientProxy);
    getMean(data: number[]): Promise<import("rxjs").Observable<any>>;
    getMovingAverage(data: {
        series: any[];
        windowSize: number;
    }): Promise<import("rxjs").Observable<any>>;
}
