"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TimeSeriesService = void 0;
const common_1 = require("@nestjs/common");
let TimeSeriesService = class TimeSeriesService {
    calculateMovingAverage(data, windowSize) {
        return data.map((point, index) => {
            if (index < windowSize - 1) {
                return { timestamp: point.timestamp, value: null };
            }
            const windowSlice = data.slice(index - windowSize + 1, index + 1);
            const sum = windowSlice.reduce((acc, curr) => acc + curr.value, 0);
            return { timestamp: point.timestamp, value: sum / windowSize };
        });
    }
    detectOutliers(data, threshold) {
        const values = data.map(point => point.value);
        const mean = values.reduce((a, b) => a + b) / values.length;
        const stdDev = Math.sqrt(values.reduce((sq, n) => sq + Math.pow(n - mean, 2), 0) / values.length);
        return data.filter(point => Math.abs(point.value - mean) > threshold * stdDev);
    }
};
exports.TimeSeriesService = TimeSeriesService;
exports.TimeSeriesService = TimeSeriesService = __decorate([
    (0, common_1.Injectable)()
], TimeSeriesService);
//# sourceMappingURL=timeseries.service.js.map