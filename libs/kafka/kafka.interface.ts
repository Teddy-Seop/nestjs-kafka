import { Message, ProducerRecord } from 'kafkajs';

export interface IKafkaEvent extends ProducerRecord {
  messages: IKafkaMessage[];
}

export interface IKafkaMessage extends Message {
  key: string;
  value: string;
  partition?: number;
  timestamp?: string;
}
