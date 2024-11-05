import { ClientProxy } from '@nestjs/microservices';
export declare class GatewayResolver {
    private statsClient;
    private timeseriesClient;
    constructor(statsClient: ClientProxy, timeseriesClient: ClientProxy);
    mean(numbers: number[]): Promise<import("rxjs").Observable<any>>;
    movingAverage(series: number[], windowSize: number): Promise<import("rxjs").Observable<any>>;
}
