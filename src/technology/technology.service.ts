import { Injectable } from '@nestjs/common';

@Injectable()
export class TechnologyService {
  private technologies = ['nodejs'];

  create(technology: string) {
    this.technologies.push(technology);
  }

  findAll() {
    return this.technologies;
  }
}
