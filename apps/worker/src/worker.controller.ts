import { Controller, OnModuleInit } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';

import { KafkaConsumerFactoryService } from 'libs/kafka';

import { WorkerService } from './worker.service';

@Controller()
export class WorkerController implements OnModuleInit {
  constructor(
    private readonly service: WorkerService,
    private readonly kafkaConsumerFactoryService: KafkaConsumerFactoryService,
  ) {}

  public async onModuleInit(): Promise<void> {
    const client = this.kafkaConsumerFactoryService.get();
    client.subscribeToResponseOf('test');
    console.log('Client is connecting...');
    await client.connect();
    console.log('Client connected successfully');
  }

  @MessagePattern('test')
  public async consume(@Payload() event: any): Promise<void> {
    await this.service.consume(event);
  }
}
