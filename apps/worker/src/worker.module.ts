import { Module } from '@nestjs/common';

import { WorkerController } from './worker.controller';
import { WorkerService } from './worker.service';

import { KafkaConsumerModule } from 'libs/kafka';

@Module({
  imports: [KafkaConsumerModule],
  controllers: [WorkerController],
  providers: [WorkerService],
})
export class WorkerModule {}
