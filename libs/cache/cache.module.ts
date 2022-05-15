import { Module } from '@nestjs/common';

import { CacheService } from './cache.service';
import { RedisClientService } from './redis-client.service';

@Module({
  providers: [CacheService, RedisClientService],
  exports: [CacheService],
})
export class CacheModule {}
