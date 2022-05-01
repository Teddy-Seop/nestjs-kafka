import { Injectable, OnModuleInit } from '@nestjs/common';
import { ClientKafka } from '@nestjs/microservices';
import * as config from 'config';

@Injectable()
export class KafkaClientService extends ClientKafka implements OnModuleInit {
  constructor() {
    super({
      client: {
        connectionTimeout: config.get<number>('kafka.connectionTimeout'),
        clientId: config.get<string>('kafka.clientId'),
        brokers: config.get<string[]>('kafka.brokers'),
      },
    });
  }

  public async onModuleInit(): Promise<void> {
    try {
      await this.connect();

      console.log('Kafka Client is connected.');
    } catch (error) {
      console.error('Failed to connect Kafka Service', error.stack);
    }
  }
}
