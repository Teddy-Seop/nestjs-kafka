import { Injectable, OnModuleInit } from '@nestjs/common';
import { Kafka } from '@nestjs/microservices/external/kafka.interface';
import * as config from 'config';
import { IKafkaEvent } from './kafka.interface';

@Injectable()
export class KafkaProducerService implements OnModuleInit {
  readonly #producer = new Kafka({
    clientId: config.get<string>('kafka.clientId'),
    brokers: config.get<string[]>('kafka.brokers'),
  }).producer();

  public async onModuleInit(): Promise<void> {
    try {
      await this.#producer.connect();

      console.log('Kafka Producer is connected');
    } catch (error) {
      console.error('Failed to connect Kafka Producer');
    }
  }

  public async publish(event: IKafkaEvent): Promise<void> {
    this.#producer.send(event);
  }
}
