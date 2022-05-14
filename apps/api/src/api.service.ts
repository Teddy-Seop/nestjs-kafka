import { Injectable } from '@nestjs/common';

import { IKafkaEvent, KafkaProducerService } from 'libs/kafka';

@Injectable()
export class ApiService {
  constructor(private readonly kafkaProducerService: KafkaProducerService) {}

  public async publish(): Promise<void> {
    try {
      const event: IKafkaEvent = {
        topic: 'test',
        messages: [
          {
            key: 'test key',
            value: 'tets value',
          },
        ],
      };
      await this.kafkaProducerService.publish(event);
      console.log('success');
    } catch (error) {
      throw error;
    }
  }
}
