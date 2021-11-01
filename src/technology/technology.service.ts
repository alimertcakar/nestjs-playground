import { Injectable } from '@nestjs/common';

@Injectable()
export class TechnologyService {
  private technologies = new Map();

  create(key: string, value: string) {
    this.technologies.set(key, value);
  }

  findOne(key: string) {
    return this.technologies.get(key);
  }

  findAll() {
    return this.technologies;
  }
}
