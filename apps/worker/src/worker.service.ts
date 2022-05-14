import { Injectable } from '@nestjs/common';

@Injectable()
export class WorkerService {
  public async consume(event: any): Promise<boolean> {
    console.log(JSON.stringify(event, null, 2));

    return true;
  }
}
