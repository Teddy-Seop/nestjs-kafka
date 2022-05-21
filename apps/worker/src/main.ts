import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import * as config from 'config';

import { WorkerModule } from './worker.module';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    WorkerModule,
    {
      transport: Transport.KAFKA,
      options: {
        client: {
          brokers: config.get<string[]>('kafka.brokers'),
        },
      },
    },
  );

  await app.listen();
}
bootstrap();
