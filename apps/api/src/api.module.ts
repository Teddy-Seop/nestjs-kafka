import { Module } from '@nestjs/common';

import { ApiController } from './api.controller';
import { ApiService } from './api.service';

import { CacheModule } from 'libs/cache';
import { KafkaProducerModule } from 'libs/kafka';

@Module({
  imports: [KafkaProducerModule, CacheModule],
  controllers: [ApiController],
  providers: [ApiService],
})
export class ApiModule {}
