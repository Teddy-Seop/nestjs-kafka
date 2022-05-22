import { Injectable } from '@nestjs/common';
import * as Redis from 'ioredis';
import * as config from 'config';

@Injectable()
export class RedisClientService extends Redis.Cluster {
  constructor() {
    super([
      {
        host: config.get<string>('redis.host'),
        port: config.get<number>('redis.port'),
      },
    ]);

    this.client('SETNAME', 'NEST-KAFKA-CACHE');
  }
}
