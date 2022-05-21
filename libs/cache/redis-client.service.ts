import { Injectable } from '@nestjs/common';
import * as Redis from 'ioredis';

@Injectable()
export class RedisClientService extends Redis.Cluster {
  constructor() {
    super([{ host: 'localhost', port: 6300 }]);

    this.client('SETNAME', 'NEST-KAFKA-CACHE');
  }
}
