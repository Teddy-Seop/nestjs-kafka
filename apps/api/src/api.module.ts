import { Module } from '@nestjs/common';

import { ApiController } from './api.controller';
import { ApiService } from './api.service';

import { KafkaProducerModule } from 'libs/kafka';

@Module({
  imports: [KafkaProducerModule],
  controllers: [ApiController],
  providers: [ApiService],
})
export class ApiModule {}
