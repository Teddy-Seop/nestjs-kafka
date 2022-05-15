import { Injectable } from '@nestjs/common';

import { RedisClientService } from './redis-client.service';

@Injectable()
export class CacheService {
  constructor(private readonly redisClientService: RedisClientService) {}

  public async get(key: string): Promise<string | null> {
    const value = await this.redisClientService.get(key);

    if (!value) {
      return null;
    }

    return value;
  }

  public async set(key: string, value: string): Promise<boolean> {
    await this.redisClientService.set(key, value);

    return true;
  }
}
