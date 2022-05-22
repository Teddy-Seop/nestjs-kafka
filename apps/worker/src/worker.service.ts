import { Injectable } from '@nestjs/common';

@Injectable()
export class WorkerService {
  public async consume(event: any): Promise<boolean> {
    return true;
  }
}
