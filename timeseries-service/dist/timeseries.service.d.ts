export interface TimeSeriesPoint {
    timestamp: Date;
    value: number;
}
export declare class TimeSeriesService {
    calculateMovingAverage(data: TimeSeriesPoint[], windowSize: number): TimeSeriesPoint[];
    detectOutliers(data: TimeSeriesPoint[], threshold: number): TimeSeriesPoint[];
}
