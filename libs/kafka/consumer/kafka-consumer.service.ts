import { Injectable } from '@nestjs/common';
import { Client, ClientKafka, Transport } from '@nestjs/microservices';
import * as config from 'config';

@Injectable()
export class KafkaConsumerFactoryService {
  @Client({
    transport: Transport.KAFKA,
    options: {
      client: {
        clientId: config.get<string>('kafka.clientId'),
        brokers: config.get<string[]>('kafka.brokers'),
      },
      consumer: {
        groupId: 'test-group',
        allowAutoTopicCreation: true,
      },
      run: {
        autoCommit: false,
      },
    },
  })
  private readonly client: ClientKafka;

  public get(): ClientKafka {
    return this.client;
  }
}
