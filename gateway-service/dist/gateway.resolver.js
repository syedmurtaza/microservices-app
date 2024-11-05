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
exports.GatewayResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const common_1 = require("@nestjs/common");
const microservices_1 = require("@nestjs/microservices");
let GatewayResolver = class GatewayResolver {
    constructor(statsClient, timeseriesClient) {
        this.statsClient = statsClient;
        this.timeseriesClient = timeseriesClient;
    }
    async mean(numbers) {
        return this.statsClient.send({ cmd: 'calculateMean' }, numbers);
    }
    async movingAverage(series, windowSize) {
        return this.timeseriesClient.send({ cmd: 'calculateMovingAverage' }, { series, windowSize });
    }
};
exports.GatewayResolver = GatewayResolver;
__decorate([
    (0, graphql_1.Query)(),
    __param(0, (0, graphql_1.Args)('numbers')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array]),
    __metadata("design:returntype", Promise)
], GatewayResolver.prototype, "mean", null);
__decorate([
    (0, graphql_1.Mutation)(),
    __param(0, (0, graphql_1.Args)('series')),
    __param(1, (0, graphql_1.Args)('windowSize')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array, Number]),
    __metadata("design:returntype", Promise)
], GatewayResolver.prototype, "movingAverage", null);
exports.GatewayResolver = GatewayResolver = __decorate([
    (0, graphql_1.Resolver)(),
    __param(0, (0, common_1.Inject)('STATS_SERVICE')),
    __param(1, (0, common_1.Inject)('TIMESERIES_SERVICE')),
    __metadata("design:paramtypes", [microservices_1.ClientProxy,
        microservices_1.ClientProxy])
], GatewayResolver);
//# sourceMappingURL=gateway.resolver.js.map