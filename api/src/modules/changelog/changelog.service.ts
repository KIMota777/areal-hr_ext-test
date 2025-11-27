import { Injectable } from '@nestjs/common';
import { CreateChangelogDto } from './dto/create-changelog.dto';
import { UpdateChangelogDto } from './dto/update-changelog.dto';

@Injectable()
export class ChangelogService {
  create(createChangelogDto: CreateChangelogDto) {
    return 'This action adds a new changelog';
  }

  findAll() {
    return `This action returns all changelog`;
  }

  findOne(id: number) {
    return `This action returns a #${id} changelog`;
  }

  update(id: number, updateChangelogDto: UpdateChangelogDto) {
    return `This action updates a #${id} changelog`;
  }

  remove(id: number) {
    return `This action removes a #${id} changelog`;
  }
}
