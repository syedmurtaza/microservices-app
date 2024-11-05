"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GatewayModule = void 0;
const common_1 = require("@nestjs/common");
const microservices_1 = require("@nestjs/microservices");
const graphql_1 = require("@nestjs/graphql");
const apollo_1 = require("@nestjs/apollo");
const gateway_controller_1 = require("./gateway.controller");
const gateway_resolver_1 = require("./gateway.resolver");
let GatewayModule = class GatewayModule {
};
exports.GatewayModule = GatewayModule;
exports.GatewayModule = GatewayModule = __decorate([
    (0, common_1.Module)({
        imports: [
            microservices_1.ClientsModule.register([
                { name: 'STATS_SERVICE', transport: microservices_1.Transport.TCP, options: { host: 'localhost', port: 8877 } },
                { name: 'TIMESERIES_SERVICE', transport: microservices_1.Transport.TCP, options: { host: 'localhost', port: 8878 } },
            ]),
            graphql_1.GraphQLModule.forRoot({
                driver: apollo_1.ApolloDriver,
                typePaths: ['./**/*.gql'],
            }),
        ],
        controllers: [gateway_controller_1.GatewayController],
        providers: [gateway_resolver_1.GatewayResolver],
    })
], GatewayModule);
//# sourceMappingURL=gateway.module.js.map