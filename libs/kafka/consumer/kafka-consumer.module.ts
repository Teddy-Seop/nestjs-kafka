import { Module } from '@nestjs/common';

import { KafkaConsumerFactoryService } from './kafka-consumer.service';

@Module({
  providers: [KafkaConsumerFactoryService],
  exports: [KafkaConsumerFactoryService],
})
export class KafkaConsumerModule {}
