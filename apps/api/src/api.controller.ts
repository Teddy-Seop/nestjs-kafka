import { Controller, Get } from '@nestjs/common';
import { ApiService } from './api.service';

@Controller()
export class ApiController {
  constructor(private readonly service: ApiService) {}

  @Get()
  public async publish(): Promise<boolean> {
    await this.service.publish();
    return true;
  }
}
