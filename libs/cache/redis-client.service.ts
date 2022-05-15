import { Injectable } from '@nestjs/common';
import * as config from 'config';
import Redis from 'ioredis';

@Injectable()
export class RedisClientService extends Redis {
  constructor() {
    super(config.get<number>('redis.port'), config.get<string>('redis.host'));

    this.client('SETNAME', 'NEST-KAFKA-CACHE');
  }
}
