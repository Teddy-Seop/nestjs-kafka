import { Injectable } from '@nestjs/common';
import { CacheService } from 'libs/cache';

import { IKafkaEvent, KafkaProducerService } from 'libs/kafka';

@Injectable()
export class ApiService {
  constructor(
    private readonly kafkaProducerService: KafkaProducerService,
    private readonly cacheService: CacheService,
  ) {}

  public async publish(): Promise<void> {
    try {
      const cacheKey = this.getCacheKey();
      const cachedPartitionKey = await this.getCachedEvent(cacheKey);

      const partition = Number(cachedPartitionKey) ?? this.getPartitionKey();

      const event: IKafkaEvent = {
        topic: 'test',
        messages: [
          {
            key: 'test key',
            value: 'tets value',
            partition,
          },
        ],
      };

      await this.kafkaProducerService.publish(event);
      console.log('success');
    } catch (error) {
      throw error;
    }
  }

  private getCacheKey(): string {
    // TODO: implement
    const channelId = 1;
    const propertyId = 1;
    const roomtypeId = 1;
    const date = new Date();
    return `${channelId}-${propertyId}-${roomtypeId}-${date}`;
  }

  private getPartitionKey(): number {
    // TODO: implement
    return 0;
  }

  private async getCachedEvent(key: string): Promise<string | null> {
    return this.cacheService.get(key);
  }
}
