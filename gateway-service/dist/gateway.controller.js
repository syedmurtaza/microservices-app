"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GatewayController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const microservices_1 = require("@nestjs/microservices");
let GatewayController = class GatewayController {
    constructor(statsClient, timeseriesClient) {
        this.statsClient = statsClient;
        this.timeseriesClient = timeseriesClient;
    }
    async getMean(data) {
        return this.statsClient.send({ cmd: 'calculateMean' }, data);
    }
    async getMovingAverage(data) {
        return this.timeseriesClient.send({ cmd: 'calculateMovingAverage' }, data);
    }
};
exports.GatewayController = GatewayController;
__decorate([
    (0, common_1.Get)('mean'),
    (0, swagger_1.ApiOperation)({ summary: 'Calculate mean of numbers' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Mean calculated successfully' }),
    (0, swagger_1.ApiBody)({ type: [Number] }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array]),
    __metadata("design:returntype", Promise)
], GatewayController.prototype, "getMean", null);
__decorate([
    (0, common_1.Post)('moving-average'),
    (0, swagger_1.ApiOperation)({ summary: 'Calculate moving average of a time series' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Moving average calculated successfully' }),
    (0, swagger_1.ApiBody)({ type: Object, description: '{ series: number[], windowSize: number }' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], GatewayController.prototype, "getMovingAverage", null);
exports.GatewayController = GatewayController = __decorate([
    (0, common_1.Controller)('api'),
    __param(0, (0, common_1.Inject)('STATS_SERVICE')),
    __param(1, (0, common_1.Inject)('TIMESERIES_SERVICE')),
    __metadata("design:paramtypes", [microservices_1.ClientProxy,
        microservices_1.ClientProxy])
], GatewayController);
//# sourceMappingURL=gateway.controller.js.map