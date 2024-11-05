import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { StatsService } from './stats.service';

@Controller()
export class StatsController {
    constructor(private readonly statsService: StatsService) { }

    @MessagePattern({ cmd: 'calculateMean' })
    calculateMean(data: number[]): number {
        return this.statsService.calculateMean(data);
    }
}