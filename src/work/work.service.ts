import { Injectable } from '@nestjs/common';

@Injectable()
export class WorkService {
  findAll() {
    return [{ name: 'workname' }];
  }
}
